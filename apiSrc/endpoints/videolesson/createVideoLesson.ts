import { VideoLesson, PrismaClient } from '@prisma/client'
import { ApiResponse, ApiRequestWithAuth } from '../types'

interface CreateVideoLessonRequestBody {
  name: string
  description?: string
}

type CreateVideoLessonRequest = ApiRequestWithAuth<CreateVideoLessonRequestBody>
type CreateVideoLessonResponse = ApiResponse<VideoLesson>

const prisma = new PrismaClient()

async function createVideoLesson(request: CreateVideoLessonRequest, response: CreateVideoLessonResponse) {
  const [videoLesson] = await prisma.videoLesson.findMany({
    where: {
      isDraft: true,
      userId: Number(request.user.id),
    },
  })

  return response.json(
    await prisma.videoLesson.update({
      where: {
        id: videoLesson.id,
      },
      data: {
        isDraft: false,
        name: request.body.name,
        description: request.body.description,
      },
    }),
  )
}

export default createVideoLesson
export { createVideoLesson }
export type { CreateVideoLessonRequest, CreateVideoLessonResponse }
