import jwt from 'jsonwebtoken'
import { getToken } from './getToken'

interface UserPayload {
  id: string
  email: string
  role: string
  iat: number
  exp: number
}
interface TimeTokenPayload {
  userId: string
}

function getUserPayloadFromToken(token: string): UserPayload {
  return jwt.decode(getToken(token)) as UserPayload
}

function getTimeTokenPayload(token: string) {
  return jwt.decode(getToken(token)) as TimeTokenPayload
}

export { getUserPayloadFromToken, getTimeTokenPayload }
export type { UserPayload, TimeTokenPayload }
