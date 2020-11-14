import { StreamResponseBody } from '../types'
import client from '../../client'

interface PostStreamDirectUploadRequestParams {
  account_id: string
}

interface PostStreamDirectUploadRequestBody {
  maxDurationSeconds: number
  expiry?: string
  requireSignedURLs?: boolean
  allowedOrigins?: string[]
  thumbnailTimestampPct?: number
  watermark?: string
  meta?: Record<string, string>
}

interface PostStreamDirectUploadResponseBodyResult {
  uploadURL: string
  uid: string
}
type PostStreamDirectUploadResponseBody = StreamResponseBody<PostStreamDirectUploadResponseBodyResult>

async function postStreamDirectUpload(
  params: PostStreamDirectUploadRequestParams,
  body: PostStreamDirectUploadRequestBody,
) {
  const response = await client.request<PostStreamDirectUploadResponseBody>({
    method: 'POST',
    url: `/v4/accounts/${params.account_id}/stream/direct_upload`,
    data: body,
  })

  return response.data
}

export default postStreamDirectUpload
export { postStreamDirectUpload }
export type {
  PostStreamDirectUploadRequestParams,
  PostStreamDirectUploadRequestBody,
  PostStreamDirectUploadResponseBody,
}
