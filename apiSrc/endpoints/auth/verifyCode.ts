import { PrismaClient } from '@prisma/client'
import { ApiRequestWithAuth, ApiResponse } from '../types'
import { sendError, generateTimeToken, withAuthHandler } from '../../utils'
import { VerifyType, VerifyBy } from './types'

interface VerifyCodeRequestBody {
  phone?: string
  email?: string
  by: VerifyBy
  verify: VerifyType
  code: string
}
interface VerifyCodeResponseBody {
  success: boolean
  token?: string
}
type VerifyCodeRequest = ApiRequestWithAuth<VerifyCodeRequestBody>
type VerifyCodeResponse = ApiResponse<VerifyCodeResponseBody>

const prisma = new PrismaClient()

async function verifyCodeHandler(request: VerifyCodeRequest, response: VerifyCodeResponse) {
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

  if (request.body.code !== verification.code) {
    await prisma.userVerification.update({
      data: {
        attempts: {
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

    return sendError(response)('Неверный код', 500)
  }

  // Verify phone or email
  if (['phone', 'email'].includes(request.body.verify)) {
    const verificationField = request.body.verify === 'phone' ? 'isPhoneVerified' : 'isEmailVerified'

    await prisma.user.update({
      data: {
        [verificationField]: true,
      },
      where: {
        id: user.id,
      },
    })
  }

  return response.json({
    success: true,
    token: ['phone', 'email'].includes(request.body.verify)
      ? undefined
      : generateTimeToken({
          userId: user.id,
        }),
  })
}

async function verifyCode(request: VerifyCodeRequest, response: ApiResponse) {
  if (!request.body.phone && !request.body.email) {
    return withAuthHandler(verifyCodeHandler)(request, response)
  }

  return verifyCodeHandler(request, response)
}

export default verifyCode
export { verifyCode }
export type { VerifyCodeRequest, VerifyCodeResponse }
