import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { verifyToken } from './verifyToken'
import { ApiResponse, ApiRequestWithAuth } from '../endpoints/types'
import { getAuthTokenPayload } from './getTokenPayload'
import sendError from './sendError'

function authorizeRequest<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
>(req: ApiRequestWithAuth<Body, Query>) {
  if (!req.headers.authorization || (req.headers.authorization && !verifyToken(req.headers.authorization))) {
    return false
  }

  return true
}

function addAuthorizedUserToRequestObject<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
>(req: ApiRequestWithAuth<Body, Query>) {
  req.user = getAuthTokenPayload(req.headers.authorization!)

  return req
}

function withAuth<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
>(next: (req: ApiRequestWithAuth<Body, Query>, res: ApiResponse) => void) {
  return (req: ApiRequestWithAuth<Body, Query>, res: ApiResponse) => {
    if (!authorizeRequest(req)) {
      return sendError(res)('Вы не авторизованы', 401)
    }

    return next(addAuthorizedUserToRequestObject(req), res)
  }
}

export { addAuthorizedUserToRequestObject, authorizeRequest, withAuth }
