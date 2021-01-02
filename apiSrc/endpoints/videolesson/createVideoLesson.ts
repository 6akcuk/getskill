import { VideoLesson, PrismaClient, TagType } from '@prisma/client'
import { ApiResponse, ApiRequestWithAuth } from '../types'
import { DateTime } from 'luxon'

interface CreateVideoLessonRequestBody {
  name: string
  publicId: string
  version: number
  duration: number
  description?: string
  skills: string[]
}

type CreateVideoLessonRequest = ApiRequestWithAuth<CreateVideoLessonRequestBody, any>
type CreateVideoLessonResponse = ApiResponse<VideoLesson>

const prisma = new PrismaClient()

async function createVideoLesson(request: CreateVideoLessonRequest, response: CreateVideoLessonResponse) {
  const [videoLesson] = await prisma.videoLesson.findMany({
    where: {
      isDraft: true,
      userId: Number(request.user.id),
      createdAt: {
        gte: DateTime.local().minus({ minutes: 30 }).toJSDate(),
      },
    },
  })

  // const videoDetails = await getVideoDetails({ id: videoLesson.uid })

  return response.json(
    await prisma.videoLesson.update({
      where: {
        id: videoLesson.id,
      },
      data: {
        isDraft: false,
        name: request.body.name,
        description: request.body.description,
        publicId: request.body.publicId,
        version: request.body.version,
        duration: Math.floor(request.body.duration),
        isUploaded: true,
        tags: {
          connectOrCreate: request.body.skills.map(skill => ({
            where: {
              id: isNaN(Number(skill)) ? 0 : Number(skill),
            },
            create: {
              name: skill,
              type: TagType.SKILL,
            },
          })),
        },
      },
    }),
  )
}

export default createVideoLesson
export { createVideoLesson }
export type { CreateVideoLessonRequest, CreateVideoLessonResponse }
