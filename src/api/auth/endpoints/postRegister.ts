import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'

type PostRegisterRequestParams = VoidArgument
interface PostRegisterRequestBody {
  email: string
  phone: string
  publicName: string
  password: string
}

interface PostRegisterResponseBody {
  authToken: string
  refreshToken: string
}

const postRegister = defineEndpoint<
  PostRegisterRequestParams,
  PostRegisterRequestBody,
  PostRegisterResponseBody
>(({ client, body }) => client.request({ method: 'POST', url: '/api/auth/register', data: body }))

export default postRegister
export { postRegister }
export type { PostRegisterRequestParams, PostRegisterRequestBody, PostRegisterResponseBody }
