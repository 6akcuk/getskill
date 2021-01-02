import { GetSkillsRequest, GetSkillsResponse, getSkills, withAuth } from '../apiSrc'

async function skills(req: GetSkillsRequest, res: GetSkillsResponse) {
  return getSkills(req, res)
}

export default withAuth(skills)
