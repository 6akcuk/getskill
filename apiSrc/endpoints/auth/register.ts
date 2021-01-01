import { PrismaClient } from '@prisma/client'
import argon2 from 'argon2'
import { ApiRequest, ApiResponse } from '../types'
import { sendError } from '../../utils'
import { getAuthToken, getRefreshToken } from './utils'

interface RegisterRequestBody {
  email: string
  phone: string
  publicName: string
  password: string
}
interface RegisterResponseBody {
  authToken: string
  refreshToken: string
}
type RegisterRequest = ApiRequest<RegisterRequestBody>
type RegisterResponse = ApiResponse<RegisterResponseBody>

const prisma = new PrismaClient()

async function register(req: RegisterRequest, res: RegisterResponse) {
  const { email, phone, publicName, password } = req.body as RegisterRequestBody

  const passwordHash = await argon2.hash(password)

  const hasEmailExist = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (hasEmailExist) {
    return sendError(res)('Почтовый адрес уже используется', 500)
  }

  const hasPhoneExist = await prisma.user.findUnique({
    where: {
      phone,
    },
  })

  if (hasPhoneExist) {
    return sendError(res)('Номер телефона уже используется', 500)
  }

  const user = await prisma.user.create({
    data: {
      email,
      phone,
      password: passwordHash,
      profile: {
        create: {
          publicName,
        },
      },
    },
  })

  return res.json({
    authToken: await getAuthToken({
      user,
      request: req,
    }),
    refreshToken: await getRefreshToken({
      user,
      request: req,
    }),
  })
}

export default register
export { register }
export type { RegisterRequest, RegisterResponse }
