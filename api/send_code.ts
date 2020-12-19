import { ApiRequestWithAuth, ApiResponse, sendCode, withAuth } from '../apiSrc'

async function sendCodeHandler(req: ApiRequestWithAuth, res: ApiResponse) {
  return sendCode(req, res)
}

export default withAuth(sendCodeHandler)
