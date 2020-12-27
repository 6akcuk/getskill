import { PrismaClient } from '@prisma/client'
import { ApiResponse, ApiRequest } from '../types'
import { sendError, getTimeTokenPayload } from '../../utils'
import argon2 from 'argon2'

interface ChangePasswordRequestBody {
  token: string
  password: string
}
interface ChangePasswordResponseBody {
  success: boolean
}
type ChangePasswordRequest = ApiRequest<ChangePasswordRequestBody>
type ChangePasswordResponse = ApiResponse<ChangePasswordResponseBody>

const prisma = new PrismaClient()

async function changePassword(request: ChangePasswordRequest, response: ChangePasswordResponse) {
  const payload = getTimeTokenPayload(request.body.token)

  const user = await prisma.user.findUnique({
    where: {
      id: Number(payload.userId),
    },
  })

  if (!user) {
    return sendError(response)('Пользователь не найден', 404)
  }

  await prisma.user.update({
    data: {
      password: await argon2.hash(request.body.password),
    },
    where: {
      id: user.id,
    },
  })

  return response.json({
    success: true,
  })
}

export default changePassword
export { changePassword }
export type { ChangePasswordRequest, ChangePasswordResponse }
