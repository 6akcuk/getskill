import { NowRequest, NowRequestBody, NowRequestQuery, NowResponse } from '@vercel/node'
import { UserPayload } from '../utils'

interface ApiRequest<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
> extends NowRequest {
  method: string
  query: Query
  body: Body
  user?: UserPayload | null
}

interface ApiRequestWithAuth<
  Body extends NowRequestBody = NowRequestBody,
  Query extends NowRequestQuery = NowRequestQuery
> extends ApiRequest<Body, Query> {
  user: UserPayload
}

interface ApiResponse<Body = any> extends NowResponse {
  send: (body: Body) => NowResponse
  json: (jsonBody: Body) => NowResponse
}

interface ApiResponseErrorBody {
  error: {
    code?: number
    message: string
  }
}

type ErrorResponse = ApiResponse<ApiResponseErrorBody>

export type { ApiRequest, ApiRequestWithAuth, ApiResponse, ApiResponseErrorBody, ErrorResponse }
