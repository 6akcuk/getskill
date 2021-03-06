import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { PrismaClient, Specialist } from '@prisma/client'
import { ApiResponse, ApiRequest } from '../types'

interface GetSpecialistsRequestQuery extends NowRequestQuery {
  skill: string
  page: string
  limit: string
}

type GetSpecialistsRequest = ApiRequest<NowRequestBody, GetSpecialistsRequestQuery>
type GetSpecialistsResponse = ApiResponse<Specialist[]>

const prisma = new PrismaClient()

async function getSpecialists(request: GetSpecialistsRequest, response: GetSpecialistsResponse) {
  const take = Number(request.query.limit ?? 10)
  const skip = (Number(request.query.page ?? 1) - 1) * take

  const specialists = await prisma.specialist.findMany({
    include: {
      user: {
        select: {
          id: true,
          profile: true,
        },
      },
      tags: {
        select: {
          tag: true,
        },
      },
    },
    where: {
      tags: request.query.skill
        ? {
            some: {
              tag: {
                name: request.query.skill,
              },
            },
          }
        : undefined,
      scores: {
        gt: 0,
      },
    },
    orderBy: {
      scores: 'desc',
    },
    take,
    skip,
  })
  const total = await prisma.specialist.count({
    where: {
      scores: {
        gt: 0,
      },
    },
  })

  response.setHeader('total', total)

  return response.json(specialists)
}

export default getSpecialists
export { getSpecialists }
export type { GetSpecialistsRequest, GetSpecialistsResponse }
