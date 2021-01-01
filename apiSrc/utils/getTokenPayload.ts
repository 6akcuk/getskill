import jwt from 'jsonwebtoken'
import { getToken } from './getToken'

interface AuthTokenPayload {
  id: string
  email: string
  role: string
  iat: number
  exp: number
}
interface RefreshTokenPayload {
  id: string
  refresh: boolean
}
interface TimeTokenPayload {
  userId: string
}

function getAuthTokenPayload(token: string): AuthTokenPayload {
  return jwt.decode(getToken(token)) as AuthTokenPayload
}

function getRefreshTokenPayload(token: string) {
  return jwt.decode(getToken(token)) as RefreshTokenPayload
}

function getTimeTokenPayload(token: string) {
  return jwt.decode(getToken(token)) as TimeTokenPayload
}

export { getAuthTokenPayload, getRefreshTokenPayload, getTimeTokenPayload }
export type { AuthTokenPayload, RefreshTokenPayload, TimeTokenPayload }
