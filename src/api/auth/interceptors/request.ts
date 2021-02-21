import { AxiosRequestConfig } from 'axios'
import { AuthStorageKeys } from '../types'

function addAuthorizationToken(config: AxiosRequestConfig) {
  const token = localStorage.getItem(AuthStorageKeys.AUTH_TOKEN)

  if (!token) {
    return config
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  }
}

export { addAuthorizationToken }
