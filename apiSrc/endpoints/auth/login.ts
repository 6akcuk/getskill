import { PrismaClient } from '@prisma/client'
import argon2 from 'argon2'
import { ApiRequest, ApiResponse } from '../types'
import { sendError } from '../../utils'
import { getAuthToken } from './utils'

interface LoginRequestBody {
  username: string
  password: string
}
interface LoginResponseBody {
  token: string
}
type LoginRequest = ApiRequest<LoginRequestBody>
type LoginResponse = ApiResponse<LoginResponseBody>

const prisma = new PrismaClient()

async function login(req: LoginRequest, res: LoginResponse) {
  const { username, password } = req.body

  const field = username.match(/^\+\d+/) ? 'phone' : 'email'
  const user = await prisma.user.findOne({
    where: {
      [field]: username,
    },
  })

  if (!user || (user && !(await argon2.verify(user.password, password)))) {
    return sendError(res)('Неверные имя пользователя/пароль', 401)
  }

  return res.json({
    token: await getAuthToken({
      user,
      request: req,
    }),
  })
}

export default login
export { login }
export type { LoginRequest, LoginResponse }
