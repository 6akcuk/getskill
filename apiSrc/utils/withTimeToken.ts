import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { verifyToken } from './verifyToken'
import { ApiResponse, ApiRequest } from '../endpoints/types'
import sendError from './sendError'

interface RequestBodyWithTimeToken extends NowRequestBody {
  token: string
}

function authorizeTimeTokenRequest<
  Body extends RequestBodyWithTimeToken,
  Query extends NowRequestQuery = NowRequestQuery
>(req: ApiRequest<Body, Query>) {
  if (!req.body.token || (req.body.token && !verifyToken(req.body.token))) {
    return false
  }

  return true
}

function withTimeToken<
  Body extends RequestBodyWithTimeToken,
  Query extends NowRequestQuery = NowRequestQuery
>(next: (req: ApiRequest<Body, Query>, res: ApiResponse) => void) {
  return (req: ApiRequest<Body, Query>, res: ApiResponse) => {
    if (!authorizeTimeTokenRequest(req)) {
      return sendError(res)('Действие запрещено', 403)
    }

    return next(req, res)
  }
}

export { authorizeTimeTokenRequest, withTimeToken }
