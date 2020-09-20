import client from '../client'

interface PostRegisterParams {
  email: string
  phone: string
  publicName: string
  password: string
}

interface PostRegisterResponse {
  token: string
}

async function postRegister(params: PostRegisterParams) {
  const response = await client.post<PostRegisterResponse>('/api/register', params)

  return response.data
}

export default postRegister
export { postRegister }
export type { PostRegisterParams, PostRegisterResponse }
