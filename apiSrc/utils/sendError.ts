import { ApiResponse } from '../endpoints'
import apiResponseErrorBody from './apiResponseErrorBody'

function sendError(response: ApiResponse) {
  return (message: string, code?: number | undefined) =>
    response.status(code ?? 400).send(apiResponseErrorBody(message, code))
}

export default sendError
export { sendError }
