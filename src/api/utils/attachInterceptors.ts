import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { APIInstance } from '../client'

type Promised<T> = T | Promise<T>
type FulfillInterceptor<T> = (v: T) => Promised<T>
type RequestInterceptor = FulfillInterceptor<AxiosRequestConfig>
type ResponseSuccessInterceptor = FulfillInterceptor<AxiosResponse>
type ResponseErrorInterceptor = (client: AxiosInstance, api: APIInstance) => (error: AxiosError) => any

interface Interceptors {
  request: RequestInterceptor[]
  response: {
    success?: ResponseSuccessInterceptor[]
    error?: ResponseErrorInterceptor[]
  }
}

function attachInterceptors(client: AxiosInstance, api: APIInstance, interceptors: Interceptors) {
  interceptors.request.forEach(interceptor => client.interceptors.request.use(interceptor))

  const indexes = Math.max(
    interceptors.response.success?.length ?? 0,
    interceptors.response.error?.length ?? 0,
  )

  for (let index = 0; index < indexes; index++) {
    const successInterceptor = interceptors.response.success?.[index]
    const errorInterceptor = interceptors.response.error?.[index](client, api)

    client.interceptors.response.use(successInterceptor, errorInterceptor)
  }
}

export default attachInterceptors
export { attachInterceptors }
export type { ResponseErrorInterceptor, ResponseSuccessInterceptor, RequestInterceptor }
