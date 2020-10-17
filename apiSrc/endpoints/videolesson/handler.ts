import createVideoLesson, { CreateVideoLessonRequest, CreateVideoLessonResponse } from './createVideolesson'

interface HandlerParams {
  request: VideoLessonRequest
  response: VideoLessonResponse
}

type VideoLessonRequest = CreateVideoLessonRequest
type VideoLessonResponse = CreateVideoLessonResponse

type Handler = (request: VideoLessonRequest, response: VideoLessonResponse) => Promise<VideoLessonResponse>

function handler(params: HandlerParams) {
  const handlers: Record<string, Handler> = {
    ['POST']: createVideoLesson,
  }

  return handlers[params.request.method](params.request, params.response)
}

export default handler
export { handler as videoLessonHandler }
export type { VideoLessonRequest, VideoLessonResponse }
