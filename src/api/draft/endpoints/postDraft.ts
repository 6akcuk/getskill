import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'
import { VideoLesson } from '../../videoLesson/types'
import { DraftResourceType } from '../types'

type AnyDraftEntity = VideoLesson

type PostDraftRequestParams = VoidArgument
interface PostDraftRequestBody {
  resourceType: DraftResourceType
}
type PostDraftResponseBody = AnyDraftEntity

const postDraft = defineEndpoint<PostDraftRequestParams, PostDraftRequestBody, PostDraftResponseBody>(
  ({ client, body }) =>
    client.request({
      method: 'POST',
      url: '/api/draft',
      data: body,
    }),
)

export default postDraft
export { postDraft }
export type { PostDraftRequestParams, PostDraftRequestBody, PostDraftResponseBody }
