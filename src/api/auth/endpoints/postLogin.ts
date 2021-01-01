import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'

type PostLoginRequestParams = VoidArgument
interface PostLoginRequestBody {
  username: string
  password: string
}

interface PostLoginResponseBody {
  authToken: string
  refreshToken: string
}

const postLogin = defineEndpoint<PostLoginRequestParams, PostLoginRequestParams, PostLoginResponseBody>(
  ({ client, body }) =>
    client.request({
      method: 'POST',
      url: '/api/auth/login',
      data: body,
    }),
)

export default postLogin
export { postLogin }
export type { PostLoginRequestParams, PostLoginRequestBody, PostLoginResponseBody }
