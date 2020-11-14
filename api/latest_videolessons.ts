import { ApiRequest, ApiResponse } from '../apiSrc'
import { PrismaClient, VideoLesson } from '@prisma/client'

const prisma = new PrismaClient()

async function latestVideolessons(req: ApiRequest, res: ApiResponse<VideoLesson[]>) {
  return res.json(
    await prisma.videoLesson.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        isDraft: false,
        isReady: true,
      },
      take: 6,
    }),
  )
}

export default latestVideolessons
