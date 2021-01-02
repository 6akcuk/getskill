import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import * as auth from './auth/endpoints'
import * as draft from './draft/endpoints'
import * as skill from './skill/endpoints'
import * as user from './user/endpoints'
import * as videoLesson from './videoLesson/endpoints'
import * as authInterceptors from './auth/interceptors'
import { combineEndpoints, attachInterceptors } from './utils'

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
    ...skill,
    ...user,
    ...videoLesson,
  })
}

type APIInstance = ReturnType<typeof createAPI>

function createClient() {
  const baseClient = axios.create()
  const apiClient = createAPI({ client: baseClient })

  attachInterceptors(baseClient, apiClient, {
    request: [authInterceptors.addAuthorizationToken],
    response: {
      error: [authInterceptors.processAuthTokenOnUnauthorizedError],
    },
  })

  Object.assign(baseClient, apiClient)

  return baseClient as typeof baseClient & typeof apiClient
}

const client = createClient()

export { client }
export default client
export type { APIInstance }
