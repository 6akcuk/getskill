import { StreamResponseBody } from '../types'
import client from '../../client'
import { VoidArgument } from '../../types'

interface GetStreamDetailsRequestParams {
  account_id: string
  id: string
}

type GetStreamDetailsRequestBody = VoidArgument

interface GetStreamDetailsResponseBodyResult {
  allowedOrigins: string[]
  created: string
  duration: number
  input: {
    height: number
    width: number
  }
  maxDurationSeconds: number
  modified: string
  uploadExpiry: string
  playback: {
    hls: string
    dash: string
  }
  preview: string
  readyToStream: boolean
  requireSignedURLs: boolean
  size: number
  status: {
    state: string
    pctComplete: number
  }
  thumbnail: string
  thumbnailTimestampPct: number
  uid: string
  uploaded: string
  watermark: {
    uid: string
    size: number
    height: number
    width: number
    created: string
    downloadedFrom: string
    name: string
    opacity: number
    padding: number
    scale: number
    position: string
  }
}
type GetStreamDetailsResponseBody = StreamResponseBody<GetStreamDetailsResponseBodyResult>

async function getStreamDetails(params: GetStreamDetailsRequestParams, body: GetStreamDetailsRequestBody) {
  const response = await client.request<GetStreamDetailsResponseBody>({
    method: 'GET',
    url: `/v4/accounts/${params.account_id}/stream/${params.id}`,
    data: body,
  })

  return response.data
}

export default getStreamDetails
export { getStreamDetails }
export type { GetStreamDetailsRequestParams, GetStreamDetailsRequestBody, GetStreamDetailsResponseBody }
