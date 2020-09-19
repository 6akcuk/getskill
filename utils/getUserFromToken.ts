import jwt from 'jsonwebtoken'
import { getToken } from './getToken'

interface UserPayload {
  id: string
  email: string
  role: string
  iat: number
  exp: number
}

function getUserPayloadFromToken(token: string): UserPayload {
  return jwt.decode(getToken(token)) as UserPayload
}

export { getUserPayloadFromToken }
export type { UserPayload }
