import { NowRequestQuery, NowRequestBody } from '@vercel/node'
import { ApiRequest, ApiResponse } from '../types'
import { Tag, PrismaClient } from '@prisma/client'

interface GetSkillsRequestQuery extends NowRequestQuery {
  query: string
}
type GetSkillsRequest = ApiRequest<NowRequestBody, GetSkillsRequestQuery>
type GetSkillsResponse = ApiResponse<Tag[]>

const prisma = new PrismaClient()

async function getSkills(request: GetSkillsRequest, response: GetSkillsResponse) {
  return response.json(
    await prisma.tag.findMany({
      where: {
        name: {
          contains: request.query.query,
        },
      },
      take: 10,
    }),
  )
}

export default getSkills
export { getSkills }
export type { GetSkillsRequest, GetSkillsResponse }
