import createVideoLesson, { CreateVideoLessonRequest, CreateVideoLessonResponse } from './createVideolesson'
import { withAuthHandler, ApiHandler } from '../../utils/withAuthHandler'
import getVideoLessons, { GetVideoLessonsRequest, GetVideoLessonsResponse } from './getVideoLessons'

interface HandlerParams {
  request: VideoLessonsRequest
  response: VideoLessonsResponse
}

type VideoLessonsRequest = CreateVideoLessonRequest | GetVideoLessonsRequest
type VideoLessonsResponse = CreateVideoLessonResponse | GetVideoLessonsResponse

type Handler = ApiHandler<VideoLessonsRequest, VideoLessonsResponse>

function handler(params: HandlerParams) {
  const handlers: Record<string, Handler> = {
    ['GET']: getVideoLessons,
    ['POST']: withAuthHandler(createVideoLesson),
  }

  return handlers[params.request.method](params.request, params.response)
}

export default handler
export { handler as videoLessonsHandler }
export type { VideoLessonsRequest, VideoLessonsResponse }
