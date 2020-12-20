import { ApiRequestWithAuth, ApiResponse, verifyCode, withAuth } from '../apiSrc'

async function verifyCodeHandler(req: ApiRequestWithAuth, res: ApiResponse) {
  return verifyCode(req, res)
}

export default withAuth(verifyCodeHandler)
