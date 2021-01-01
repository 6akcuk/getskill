import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'

type PostRefreshTokenRequestParams = VoidArgument
interface PostRefreshTokenRequestBody {
  token: string
}

interface PostRefreshTokenResponseBody {
  authToken: string
}

const postRefreshToken = defineEndpoint<
  PostRefreshTokenRequestParams,
  PostRefreshTokenRequestBody,
  PostRefreshTokenResponseBody
>(({ client, body }) =>
  client.request({
    method: 'POST',
    url: '/api/auth/refresh_token',
    data: body,
  }),
)

export default postRefreshToken
export { postRefreshToken }
export type { PostRefreshTokenRequestParams, PostRefreshTokenRequestBody, PostRefreshTokenResponseBody }
