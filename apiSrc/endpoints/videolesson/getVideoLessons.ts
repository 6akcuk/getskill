import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { VideoLesson, PrismaClient } from '@prisma/client'
import { ApiResponse, ApiRequest } from '../types'

interface GetVideoLessonsRequestQuery extends NowRequestQuery {
  userId: string
  skill: string
  page: string
  limit: string
}

type GetVideoLessonsRequest = ApiRequest<NowRequestBody, GetVideoLessonsRequestQuery>
type GetVideoLessonsResponse = ApiResponse<VideoLesson[]>

const prisma = new PrismaClient()

async function getVideoLessons(request: GetVideoLessonsRequest, response: GetVideoLessonsResponse) {
  const take = Number(request.query.limit ?? 10)
  const skip = (Number(request.query.page ?? 1) - 1) * take

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
      video: {
        select: {
          serviceId: true,
          duration: true,
          preview: true,
        },
      },
      tags: {
        select: {
          tag: true,
        },
      },
    },
    where: {
      userId: Number(request.query.userId) || undefined, // use || to avoid NaN
      tags: request.query.skill
        ? {
            some: {
              tag: {
                name: request.query.skill,
                type: 'SKILL',
              },
            },
          }
        : undefined,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take,
    skip,
  })
  const total = await prisma.videoLesson.count({
    where: {
      userId: Number(request.query.userId) || undefined,
    },
  })

  response.setHeader('total', total)

  return response.json(videoLessons)
}

export default getVideoLessons
export { getVideoLessons }
export type { GetVideoLessonsRequest, GetVideoLessonsResponse }
