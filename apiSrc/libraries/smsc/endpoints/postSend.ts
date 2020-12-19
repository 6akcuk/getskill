import client from '../client'

interface PostSendRequestParams {
  phones: string
  mes: string
  sender?: string
  call?: boolean
  viber?: boolean
}

async function postSend(params: PostSendRequestParams) {
  const response = await client.request({
    method: 'POST',
    params: {
      ...params,
      call: Number(params.call),
      viber: Number(params.viber),
    },
  })

  return response.data
}

export default postSend
export { postSend }
export type { PostSendRequestParams }
