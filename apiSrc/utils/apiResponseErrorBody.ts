import { ApiResponseErrorBody } from '../endpoints/types'

function apiResponseErrorBody(message: string, code?: number | undefined): ApiResponseErrorBody {
  return {
    error: {
      code,
      message,
    },
  }
}

export default apiResponseErrorBody
export { apiResponseErrorBody }
