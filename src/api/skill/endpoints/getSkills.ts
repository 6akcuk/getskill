import { VoidArgument } from '../../utils'
import defineEndpoint from '../../utils/defineEndpoint'
import { Skill } from '../types'

interface GetSkillsRequestParams {
  query?: string
}
type GetSkillsRequestBody = VoidArgument
type GetSkillsResponseBody = Skill[]

const getSkills = defineEndpoint<GetSkillsRequestParams, GetSkillsRequestParams, GetSkillsResponseBody>(
  ({ client, params }) =>
    client.request({
      method: 'GET',
      url: '/api/skills',
      params,
    }),
)

export default getSkills
export { getSkills }
export type { GetSkillsRequestParams, GetSkillsRequestBody, GetSkillsResponseBody }
