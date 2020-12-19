import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'

type PostSendCodeRequestParams = VoidArgument
interface PostSendCodeRequestBody {
  verify: 'phone' | 'email'
}

type PostSendCodeResponseBody = VoidArgument

const postSendCode = defineEndpoint<
  PostSendCodeRequestParams,
  PostSendCodeRequestBody,
  PostSendCodeResponseBody
>(({ client, body }) => client.request({ method: 'POST', url: '/api/send_code', data: body }))

export default postSendCode
export { postSendCode }
export type { PostSendCodeRequestParams, PostSendCodeRequestBody, PostSendCodeResponseBody }
