import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { ApiResponse, ApiRequestWithAuth, ApiRequest } from '../endpoints/types'
import { authorizeRequest } from './withAuth'

type ApiHandler<Request extends ApiRequest = ApiRequest, Response extends ApiResponse = ApiResponse> = (
  request: Request,
  response: Response,
) => Promise<Response>

function withAuthHandler<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
>(handler: ApiHandler<ApiRequestWithAuth>) {
  return function runAuthHandler(req: ApiRequestWithAuth<Body, Query>, res: ApiResponse) {
    if (!authorizeRequest(req)) {
      return Promise.resolve(
        res.status(401).json({
          message: 'Вы не авторизованы',
        }),
      )
    }

    return handler(req, res)
  }
}

export { withAuthHandler }
export type { ApiHandler }
