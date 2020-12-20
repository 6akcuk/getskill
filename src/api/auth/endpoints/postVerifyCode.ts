import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'

type PostVerifyCodeRequestParams = VoidArgument
interface PostVerifyCodeRequestBody {
  verify: 'phone' | 'email'
  code: string
}
interface PostVerifyCodeResponseBody {
  success: boolean
}

const postVerifyCode = defineEndpoint<
  PostVerifyCodeRequestParams,
  PostVerifyCodeRequestBody,
  PostVerifyCodeResponseBody
>(({ client, body }) => client.request({ method: 'POST', url: '/api/verify_code', data: body }))

export default postVerifyCode
export { postVerifyCode }
export type { PostVerifyCodeRequestParams, PostVerifyCodeRequestBody, PostVerifyCodeResponseBody }
