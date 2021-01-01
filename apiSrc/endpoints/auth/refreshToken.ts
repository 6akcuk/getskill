import { PrismaClient } from '@prisma/client'
import { ApiRequest, ApiResponse } from '../types'
import { sendError, getRefreshTokenPayload, verifyToken } from '../../utils'
import { getAuthToken } from './utils'

interface RefreshTokenRequestBody {
  token: string
}
interface RefreshTokenResponseBody {
  authToken: string
}
type RefreshTokenRequest = ApiRequest<RefreshTokenRequestBody>
type RefreshTokenResponse = ApiResponse<RefreshTokenResponseBody>

const prisma = new PrismaClient()

async function refreshToken(req: RefreshTokenRequest, res: RefreshTokenResponse) {
  if (!verifyToken(req.body.token)) {
    return sendError(res)('Ключ невалидный', 401)
  }

  const payload = getRefreshTokenPayload(req.body.token)
  const user = await prisma.user.findOne({
    where: {
      id: Number(payload.id),
    },
  })

  if (!user) {
    return sendError(res)('Пользователь не найден', 404)
  }

  return res.json({
    authToken: await getAuthToken({
      user,
      request: req,
    }),
  })
}

export default refreshToken
export { refreshToken }
export type { RefreshTokenRequest, RefreshTokenResponse }
