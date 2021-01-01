import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'

type PostChangePasswordRequestParams = VoidArgument
interface PostChangePasswordRequestBody {
  token: string
  password: string
}
interface PostChangePasswordResponseBody {
  success: boolean
}

const postChangePassword = defineEndpoint<
  PostChangePasswordRequestParams,
  PostChangePasswordRequestBody,
  PostChangePasswordResponseBody
>(({ client, body }) => client.request({ method: 'POST', url: '/api/auth/change_password', data: body }))

export default postChangePassword
export { postChangePassword }
export type { PostChangePasswordRequestParams, PostChangePasswordRequestBody, PostChangePasswordResponseBody }
