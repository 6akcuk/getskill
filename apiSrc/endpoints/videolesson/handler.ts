import createVideoLesson, { CreateVideoLessonRequest, CreateVideoLessonResponse } from './createVideolesson'
import { withAuthHandler, ApiHandler } from '../../utils/withAuthHandler'

interface HandlerParams {
  request: VideoLessonRequest
  response: VideoLessonResponse
}

type VideoLessonRequest = CreateVideoLessonRequest
type VideoLessonResponse = CreateVideoLessonResponse

type Handler = ApiHandler<VideoLessonRequest, VideoLessonResponse>

function handler(params: HandlerParams) {
  const handlers: Record<string, Handler> = {
    ['POST']: withAuthHandler(createVideoLesson),
  }

  return handlers[params.request.method](params.request, params.response)
}

export default handler
export { handler as videoLessonHandler }
export type { VideoLessonRequest, VideoLessonResponse }
