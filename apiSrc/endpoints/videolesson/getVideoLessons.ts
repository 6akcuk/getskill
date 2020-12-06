import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { VideoLesson, PrismaClient } from '@prisma/client'
import { ApiResponse, ApiRequest } from '../types'

interface GetVideoLessonsRequestQuery extends NowRequestQuery {
  userId: string
  offset: string
  limit: string
}

type GetVideoLessonsRequest = ApiRequest<NowRequestBody, GetVideoLessonsRequestQuery>
type GetVideoLessonsResponse = ApiResponse<VideoLesson[]>

const prisma = new PrismaClient()

async function getVideoLessons(request: GetVideoLessonsRequest, response: GetVideoLessonsResponse) {
  const videoLessons = await prisma.videoLesson.findMany({
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
    },
    where: {
      userId: Number(request.query.userId) || undefined,
      isReady: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: Number(request.query.limit) || 10,
    skip: Number(request.query.offset) || 0,
  })

  return response.json(videoLessons)
}

export default getVideoLessons
export { getVideoLessons }
export type { GetVideoLessonsRequest, GetVideoLessonsResponse }
