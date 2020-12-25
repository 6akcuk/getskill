import { PrismaClient } from '@prisma/client'
import { ApiRequestWithAuth, ApiResponse } from '../types'
import { sendError } from '../../utils'
import { VerifyType, VerifyBy } from './types'

interface VerifyCodeRequestBody {
  by: VerifyBy
  verify: VerifyType
  code: string
}
interface VerifyCodeResponseBody {
  success: boolean
}
type VerifyCodeRequest = ApiRequestWithAuth<VerifyCodeRequestBody>
type VerifyCodeResponse = ApiResponse<VerifyCodeResponseBody>

const prisma = new PrismaClient()

async function verifyCode(request: VerifyCodeRequest, response: VerifyCodeResponse) {
  const user = await prisma.user.findOne({
    where: {
      id: Number(request.user.id),
    },
    include: {
      UserVerification: {
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

  const verification = user.UserVerification[0]

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
        userId: user.id,
      },
    })

    return sendError(response)('Неверный код', 500)
  }

  // Verify phone or email
  const verificationField = request.body.verify === 'phone' ? 'isPhoneVerified' : 'isEmailVerified'

  await prisma.user.update({
    data: {
      [verificationField]: true,
    },
    where: {
      id: user.id,
    },
  })

  return response.json({
    success: true,
  })
}

export default verifyCode
export { verifyCode }
export type { VerifyCodeRequest, VerifyCodeResponse }
