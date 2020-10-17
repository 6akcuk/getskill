import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import qs from 'qs'
import * as auth from './auth/endpoints'
import * as draft from './draft/endpoints'
import * as videoLesson from './videoLesson/endpoints'
import { combineEndpoints } from './utils'

interface CreateAPIOptions {
  baseURL?: string
  client?: AxiosInstance
}

function createAPI(options: CreateAPIOptions) {
  const { baseURL, client = axios.create({ baseURL }) } = options

  axios.defaults.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'comma' })

  return combineEndpoints(client, {
    ...auth,
    ...draft,
    ...videoLesson,
  })
}

type APIInstance = ReturnType<typeof createAPI>

function createClient() {
  const baseClient = axios.create()
  const apiClient = createAPI({ client: baseClient })

  Object.assign(baseClient, apiClient)

  return baseClient as typeof baseClient & typeof apiClient
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
export type { APIInstance }
