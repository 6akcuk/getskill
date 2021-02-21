import { VideoLesson, PrismaClient, TagType } from '@prisma/client'
import { ApiResponse, ApiRequestWithAuth } from '../types'
import { DateTime } from 'luxon'
import { addScore, ScoreReason } from '../specialist'
import { sendError } from '../../utils'
import { getVideoDetails } from '../../libraries'

interface CreateVideoLessonRequestBody {
  name: string
  uploadUrl: string
  description?: string
  skills: string[]
}

type CreateVideoLessonRequest = ApiRequestWithAuth<CreateVideoLessonRequestBody, any>
type CreateVideoLessonResponse = ApiResponse<VideoLesson>

const prisma = new PrismaClient()

async function createVideoLesson(request: CreateVideoLessonRequest, response: CreateVideoLessonResponse) {
  const video = await prisma.video.findFirst({
    where: {
      signedUrl: request.body.uploadUrl,
    },
  })

  if (!video) {
    return sendError(response)('Загруженное видео не было найдено', 422)
  }
  if (!video.serviceId) {
    return sendError(response)('Cloudflare идентификатор не был сохранен', 422)
  }

  const videoLesson = await prisma.videoLesson.create({
    data: {
      name: request.body.name,
      description: request.body.description,
      videoId: video?.id,
      userId: Number(request.user.id),
      createdAt: DateTime.local().toJSDate(),
    },
  })

  const videoDetails = await getVideoDetails({ id: video.serviceId })

  await prisma.video.update({
    where: {
      id: video.id,
    },
    data: {
      isUploaded: true,
      duration: Math.floor(videoDetails.duration),
      preview: videoDetails.preview,
    },
  })

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

  await prisma.videoLesson.update({
    where: {
      id: videoLesson.id,
    },
    data: {
      tags: {
        connectOrCreate: request.body.skills.map(skill => ({
          where: {
            tagId_serviceId_serviceName: {
              tagId: isNaN(Number(skill)) ? 0 : Number(skill),
              serviceId: videoLesson.id,
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
            serviceId: videoLesson.id,
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
