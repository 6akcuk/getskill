import { VideoLessonRequest, VideoLessonResponse, videoLessonHandler, withAuth } from '../apiSrc'

async function videolesson(req: VideoLessonRequest, res: VideoLessonResponse) {
  return videoLessonHandler({
    request: req,
    response: res,
  })
}

export default withAuth(videolesson)
