import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { verifyToken } from './verifyToken'
import { ApiRequest, ApiResponse, ApiRequestWithAuth } from '../endpoints/types'
import { getUserPayloadFromToken } from './getUserFromToken'

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
  req.user = getUserPayloadFromToken(req.headers.authorization!)

  return req
}

function withAuth<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
>(next: (req: ApiRequest<Body, Query>, res: ApiResponse) => void) {
  return (req: ApiRequestWithAuth<Body, Query>, res: ApiResponse) => {
    if (!authorizeRequest(req)) {
      return res.status(401).json({
        message: 'Вы не авторизованы',
      })
    }

    return next(addAuthorizedUserToRequestObject(req), res)
  }
}

export { addAuthorizedUserToRequestObject, authorizeRequest, withAuth }
