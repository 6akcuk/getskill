import { VideoLesson, PrismaClient, TagType } from '@prisma/client'
import { ApiResponse, ApiRequestWithAuth } from '../types'
import { DateTime } from 'luxon'
import { addScore, ScoreReason } from '../specialist'

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
  let [videoLesson] = await prisma.videoLesson.findMany({
    where: {
      isDraft: true,
      userId: Number(request.user.id),
      createdAt: {
        gte: DateTime.local().minus({ minutes: 30 }).toJSDate(),
      },
    },
  })

  const videoLessonId = videoLesson.id

  // const videoDetails = await getVideoDetails({ id: videoLesson.uid })

  await addScore({
    userId: Number(request.user.id),
    reason: ScoreReason.PUBLISH_VIDEOLESSON,
    entityId: videoLesson.id,
  })

  const specialist = await prisma.specialist.findFirst({
    where: {
      userId: Number(request.user.id),
    },
  })

  await prisma.user.update({
    data: {
      specialist: {
        update: {
          tags: {
            connectOrCreate: request.body.skills.map(skill => ({
              where: {
                tagId_serviceId_serviceName: {
                  tagId: isNaN(Number(skill)) ? 0 : Number(skill),
                  serviceId: specialist!.id,
                  serviceName: 'specialist',
                },
              },
              create: {
                tag: {
                  connectOrCreate: {
                    where: {
                      id: isNaN(Number(skill)) ? 0 : Number(skill),
                    },
                    create: {
                      name: skill,
                      type: TagType.SKILL,
                    },
                  },
                },
                serviceId: specialist!.id,
                serviceName: 'specialist',
              },
            })),
          },
        },
      },
    },
    where: {
      id: Number(request.user.id),
    },
  })

  videoLesson = await prisma.videoLesson.update({
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
            tagId_serviceId_serviceName: {
              tagId: isNaN(Number(skill)) ? 0 : Number(skill),
              serviceId: videoLessonId,
              serviceName: 'videolesson',
            },
          },
          create: {
            tag: {
              connectOrCreate: {
                where: {
                  id: isNaN(Number(skill)) ? 0 : Number(skill),
                },
                create: {
                  name: skill,
                  type: TagType.SKILL,
                },
              },
            },
            serviceId: videoLessonId,
            serviceName: 'videolesson',
          },
        })),
      },
    },
  })

  return response.json(videoLesson)
}

export default createVideoLesson
export { createVideoLesson }
export type { CreateVideoLessonRequest, CreateVideoLessonResponse }
