import { PrismaClient } from '@prisma/client'
import { ApiRequestWithAuth, ApiResponse } from '../types'
import { sendError } from '../../utils'
import { DateTime } from 'luxon'
import { sendCodeInCall } from '../../libraries/smsc'

interface SendCodeRequestBody {
  verify: 'phone' | 'email'
}
type SendCodeRequest = ApiRequestWithAuth<SendCodeRequestBody>

const prisma = new PrismaClient()

async function sendCode(request: SendCodeRequest, response: ApiResponse) {
  const user = await prisma.user.findOne({
    where: {
      id: Number(request.user.id),
    },
    include: {
      UserVerification: {
        where: {
          type: request.body.verify === 'phone' ? 'PHONE' : 'EMAIL',
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

  const verification = user.UserVerification[0]

  if (verification && verification.attempts >= Number(process.env.VERIFICATION_MAX_ATTEMPTS)) {
    return sendError(response)('Превышено количество попыток', 500)
  }
  if (
    verification &&
    verification.times > Number(process.env.VERIFICATION_TIMES) &&
    DateTime.fromJSDate(verification.createdAt).diffNow().as('minutes') < 30
  ) {
    return sendError(response)('Превышено количество отправлений', 500)
  }

  if (request.body.verify === 'phone') {
    // FIXME enable on production
    // const callResponse = await sendCodeInCall(user.phone)
    const codeMatch = ['', '3369'] // callResponse.code.match(/\d{2}(\d{4})/)

    if (!codeMatch?.[1]) {
      return sendError(response)('Не удалось выслать код подтверждения', 500)
    }

    await prisma.userVerification.upsert({
      create: {
        user: {
          connect: {
            id: user.id,
          },
        },
        type: 'PHONE',
        code: codeMatch[1],
        createdAt: DateTime.local().toJSDate(),
      },
      update: {
        code: codeMatch[1],
        attempts: 0,
        times: {
          increment: 1,
        },
      },
      where: {
        userId: user.id,
      },
    })
  }

  return response.json({})
}

export default sendCode
export { sendCode }
export type { SendCodeRequest }
