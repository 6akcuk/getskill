import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'
import { User, UserContacts } from '../types'

type PatchProfileContactsRequestParams = VoidArgument
interface PatchProfileContactsRequestBody {
  contacts: UserContacts
}
type PatchProfileContactsResponseBody = User

const patchProfileContacts = defineEndpoint<
  PatchProfileContactsRequestParams,
  PatchProfileContactsRequestBody,
  PatchProfileContactsResponseBody
>(({ client, body }) =>
  client.request({
    method: 'PATCH',
    url: '/api/profile/contacts',
    data: body,
  }),
)

export default patchProfileContacts
export { patchProfileContacts }
export type {
  PatchProfileContactsRequestParams,
  PatchProfileContactsRequestBody,
  PatchProfileContactsResponseBody,
}
