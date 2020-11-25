import { ApiRequestWithAuth, ApiResponse, updateProfile, withAuth } from '../apiSrc'

async function profile(req: ApiRequestWithAuth, res: ApiResponse) {
  return updateProfile(req, res)
}

export default withAuth(profile)
