import { ApiResponse, withTimeToken, changePassword, ApiRequest } from '../apiSrc'

async function changePasswordHandler(req: ApiRequest, res: ApiResponse) {
  return changePassword(req, res)
}

export default withTimeToken(changePasswordHandler)
