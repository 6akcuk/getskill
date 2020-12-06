import {
  VideoLessonsRequest,
  VideoLessonsResponse,
  getVideoLessons,
  GetVideoLessonsResponse,
  createVideoLesson,
  CreateVideoLessonRequest,
  withAuthHandler,
} from '../apiSrc'

async function videolessons(req: VideoLessonsRequest, res: VideoLessonsResponse) {
  switch (req.method) {
    case 'POST':
      return withAuthHandler(createVideoLesson)(req as CreateVideoLessonRequest, res)

    case 'GET':
    default:
      return getVideoLessons(req, res as GetVideoLessonsResponse)
  }
}

export default videolessons
