import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'
import { UserAvatar, User } from '../types'

type PatchProfileRequestParams = VoidArgument
interface PatchProfileRequestBody {
  publicName: string
  avatar?: UserAvatar | null
  about?: string | null
}
type PatchProfileResponseBody = User

const patchProfile = defineEndpoint<
  PatchProfileRequestParams,
  PatchProfileRequestBody,
  PatchProfileResponseBody
>(({ client, body }) =>
  client.request({
    method: 'PATCH',
    url: '/api/profile',
    data: body,
  }),
)

export default patchProfile
export { patchProfile }
export type { PatchProfileRequestParams, PatchProfileRequestBody, PatchProfileResponseBody }
