import { PrismaClient } from '@prisma/client'
import { DraftRequest } from './types'
import { DateTime } from 'luxon'

const prisma = new PrismaClient()

async function draftVideolesson(request: DraftRequest) {
  const draftEntities = await prisma.videoLesson.findMany({
    where: {
      isDraft: true,
      userId: Number(request.user.id),
      createdAt: {
        gte: DateTime.local().minus({ minutes: 30 }).toJSDate(),
      },
    },
  })

  if (!draftEntities || (draftEntities && draftEntities.length === 0)) {
    return await prisma.videoLesson.create({
      data: {
        user: {
          connect: {
            id: Number(request.user!.id),
          },
        },
        name: '',
        duration: 0,
        createdAt: new Date(),
      },
    })
  }

  return draftEntities[0]
}

export default draftVideolesson
export { draftVideolesson }
