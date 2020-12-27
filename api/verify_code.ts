import { ApiRequestWithAuth, ApiResponse, verifyCode } from '../apiSrc'

async function verifyCodeHandler(req: ApiRequestWithAuth, res: ApiResponse) {
  return verifyCode(req, res)
}

export default verifyCodeHandler
