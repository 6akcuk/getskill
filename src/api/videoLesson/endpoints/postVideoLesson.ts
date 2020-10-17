import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'
import { VideoLesson } from '../../videoLesson/types'

type PostVideoLessonRequestParams = VoidArgument
interface PostVideoLessonRequestBody {
  name: string
  description?: string
}
type PostVideoLessonResponseBody = VideoLesson

const postVideoLesson = defineEndpoint<
  PostVideoLessonRequestParams,
  PostVideoLessonRequestBody,
  PostVideoLessonResponseBody
>(({ client, body }) =>
  client.request({
    method: 'POST',
    url: '/api/videolesson',
    data: body,
  }),
)

export default postVideoLesson
export { postVideoLesson }
export type { PostVideoLessonRequestParams, PostVideoLessonRequestBody, PostVideoLessonResponseBody }