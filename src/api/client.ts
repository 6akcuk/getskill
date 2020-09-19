import axios, { AxiosRequestConfig } from 'axios'

function createClient() {
  return axios.create()
}

const client = createClient()

function onRequest(config: AxiosRequestConfig) {
  const recoilPersist = localStorage.getItem('recoil-persist')
  const token = recoilPersist ? JSON.parse(recoilPersist).authTokenState : null

  if (!token) {
    return config
  }

  const headers = {
    ...config.headers,
    authorization: `Bearer ${token}`,
  }

  return { ...config, headers }
}

client.interceptors.request.use(onRequest)

export { client }
export default client
