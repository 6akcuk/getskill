import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { verifyToken } from './verifyToken'
import { ApiRequest, ApiResponse, ApiRequestWithAuth } from '../endpoints/types'
import { getUserPayloadFromToken } from './getUserFromToken'

function withAuth<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
>(next: (req: ApiRequest<Body, Query>, res: ApiResponse) => void) {
  return (req: ApiRequestWithAuth<Body, Query>, res: ApiResponse) => {
    if (
      !req.headers.authorization ||
      (req.headers.authorization && !verifyToken(req.headers.authorization))
    ) {
      return res.status(401).json({
        message: 'Вы не авторизованы',
      })
    }

    req.user = getUserPayloadFromToken(req.headers.authorization)

    return next(req, res)
  }
}

export { withAuth }
