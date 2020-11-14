import { GetStreamDetailsRequestParams, getStreamDetails } from '../endpoints'

type GetVideoDetailsParams = Pick<GetStreamDetailsRequestParams, 'id'>

async function getVideoDetails(params: GetVideoDetailsParams) {
  const response = await getStreamDetails(
    {
      account_id: process.env.CLOUDFLARE_STREAM_ACCOUNT_ID!,
      id: params.id,
    },
    {},
  )

  if (!response.success) {
    throw new Error(response.errors[0]?.message ?? 'Не удалось получить информацию о видео')
  }

  return response.result
}

export default getVideoDetails
export { getVideoDetails }
export type { GetVideoDetailsParams }
