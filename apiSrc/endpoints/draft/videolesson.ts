import { PrismaClient } from '@prisma/client'
import { DraftRequest } from './types'
import { generateOneTimeUploadURL } from '../../libraries/cloudflare'
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
    const { uid, uploadURL } = await generateOneTimeUploadURL({
      maxDurationSeconds: Number(process.env.VIDEOLESSON_MAX_DURATION ?? 600),
    })

    return await prisma.videoLesson.create({
      data: {
        user: {
          connect: {
            id: Number(request.user!.id),
          },
        },
        uploadUrl: uploadURL,
        uid,
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
