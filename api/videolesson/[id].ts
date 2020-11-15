import { GetVideoLessonRequest, GetVideoLessonResponse, getVideoLesson } from '../../apiSrc'

async function getVideoLessonById(req: GetVideoLessonRequest, res: GetVideoLessonResponse) {
  return getVideoLesson(req, res)
}

export default getVideoLessonById
