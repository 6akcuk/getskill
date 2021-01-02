import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { VideoLesson, PrismaClient } from '@prisma/client'
import { ApiResponse, ApiRequest } from '../types'

interface GetVideoLessonRequestQuery extends NowRequestQuery {
  id: string
}

type GetVideoLessonRequest = ApiRequest<NowRequestBody, GetVideoLessonRequestQuery>
type GetVideoLessonResponse = ApiResponse<VideoLesson>

const prisma = new PrismaClient()

async function getVideoLesson(request: GetVideoLessonRequest, response: GetVideoLessonResponse) {
  const videoLesson = await prisma.videoLesson.findUnique({
    include: {
      user: {
        select: {
          profile: {
            select: {
              publicName: true,
              avatar: true,
            },
          },
        },
      },
      tags: true,
    },
    where: {
      id: Number(request.query.id),
    },
  })

  if (!videoLesson) {
    return response.status(404).json({
      message: 'Видеоурок не найден',
    })
  }

  return response.json(videoLesson)
}

export default getVideoLesson
export { getVideoLesson }
export type { GetVideoLessonRequest, GetVideoLessonResponse }
