import jwt from 'jsonwebtoken'
import { getToken } from './getToken'

function verifyToken(token: string) {
  try {
    jwt.verify(getToken(token), process.env.JWT_SIGNATURE!)
  } catch (e) {
    return false
  }

  return true
}

export { verifyToken }
