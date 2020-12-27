import { ApiRequestWithAuth, ApiResponse, sendCode } from '../apiSrc'

async function sendCodeHandler(req: ApiRequestWithAuth, res: ApiResponse) {
  return sendCode(req, res)
}

export default sendCodeHandler
