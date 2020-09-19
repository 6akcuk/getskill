import client from '../client'

interface PostLoginParams {
  username: string
  password: string
}

interface PostLoginResponse {
  token: string
}

async function postLogin(params: PostLoginParams) {
  const response = await client.post<PostLoginResponse>('/api/login', params)

  return response.data
}

export { postLogin }
export type { PostLoginParams, PostLoginResponse }
