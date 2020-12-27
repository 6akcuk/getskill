import { PrismaClient } from '@prisma/client'
import { ApiRequestWithAuth, ApiResponse } from '../types'
import { sendError, withAuthHandler } from '../../utils'
import { DateTime } from 'luxon'
import { VerifyBy, VerifyType } from './types'
import { sendCodeInCall } from '../../libraries/smsc'

interface SendCodeRequestBody {
  phone?: string
  email?: string
  by: VerifyBy
  verify: VerifyType
}
type SendCodeRequest = ApiRequestWithAuth<SendCodeRequestBody>

const prisma = new PrismaClient()

async function sendCodeHandler(request: SendCodeRequest, response: ApiResponse) {
  let userId = null

  //
  if (request.body.phone || request.body.email) {
    const foundUser = await prisma.user.findFirst({
      where: {
        OR: {
          email: request.body.email,
          phone: request.body.phone,
        },
      },
    })

    userId = foundUser?.id
  }

  if (request.body.verify === 'forgot_password' && !userId) {
    return sendError(response)('Пользователь не найден', 404)
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId ?? Number(request.user.id),
    },
    include: {
      verifications: {
        where: {
          by: request.body.by,
          type: request.body.verify,
        },
      },
    },
  })

  if (!user) {
    return sendError(response)('Пользователь не найден', 404)
  }
  if (!user.phone) {
    return sendError(response)('Номер телефона не указан', 500)
  }

  const verification = user.verifications[0]

  if (verification && verification.attempts >= Number(process.env.VERIFICATION_MAX_ATTEMPTS)) {
    return sendError(response)('Превышено количество попыток', 500)
  }
  if (
    verification &&
    verification.times > Number(process.env.VERIFICATION_TIMES) &&
    DateTime.fromJSDate(verification.createdAt).diffNow().as('minutes') > -30
  ) {
    return sendError(response)('Превышено количество отправлений', 500)
  }

  let code = null

  if (request.body.by === 'phone') {
    // FIXME enable on production
    // const callResponse = await sendCodeInCall(user.phone)
    const codeMatch = ['', '3369'] // callResponse.code.match(/\d{2}(\d{4})/)

    code = codeMatch?.[1]
  }

  if (!code) {
    return sendError(response)('Не удалось выслать код подтверждения', 500)
  }

  await prisma.userVerification.upsert({
    create: {
      user: {
        connect: {
          id: user.id,
        },
      },
      by: request.body.by,
      type: request.body.verify,
      code,
      createdAt: DateTime.local().toJSDate(),
    },
    update: {
      code,
      attempts: 0,
      times: {
        increment: 1,
      },
    },
    where: {
      userId_by_type: {
        userId: user.id,
        by: request.body.by,
        type: request.body.verify,
      },
    },
  })

  return response.json({})
}

async function sendCode(request: SendCodeRequest, response: ApiResponse) {
  if (!request.body.phone && !request.body.email) {
    return withAuthHandler(sendCodeHandler)(request, response)
  }

  return sendCodeHandler(request, response)
}

export default sendCode
export { sendCode }
export type { SendCodeRequest }
