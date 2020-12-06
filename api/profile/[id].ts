import { GetProfileRequest, GetProfileResponse, getProfile } from '../../apiSrc'

async function getProfileById(req: GetProfileRequest, res: GetProfileResponse) {
  return getProfile(req, res)
}

export default getProfileById
