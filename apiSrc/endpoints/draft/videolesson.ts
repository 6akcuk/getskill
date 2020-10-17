import { PrismaClient } from '@prisma/client'
import { DraftRequest } from './types'
import { generateOneTimeUploadURL } from '../../libraries/cloudflare'

const prisma = new PrismaClient()

async function draftVideolesson(request: DraftRequest) {
  const draftEntities = await prisma.videoLesson.findMany({
    where: {
      isDraft: true,
      userId: Number(request.user.id),
    },
  })

  if (!draftEntities || (draftEntities && draftEntities.length === 0)) {
    const { uid, uploadURL } = {
      uid: '1',
      uploadURL: '/upload',
    } /* await generateOneTimeUploadURL({
      maxDurationSeconds: 180,
    }) */

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
        createdAt: new Date(),
      },
    })
  }

  return draftEntities[0]
}

export default draftVideolesson
export { draftVideolesson }
