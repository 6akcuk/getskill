import { ResponseErrorInterceptor, ResponseSuccessInterceptor } from '../../utils'
import { AuthStorageKeys } from '../types'
import { PostLoginResponseBody } from '../endpoints'

const storeTokensOnLoginSuccess: ResponseSuccessInterceptor = response => {
  if (response.config.url?.match(/auth\/login/)) {
    const data = response.data as PostLoginResponseBody

    localStorage.setItem(AuthStorageKeys.AUTH_TOKEN, data.authToken)
    localStorage.setItem(AuthStorageKeys.REFRESH_TOKEN, data.refreshToken)
  }

  return response
}

const processAuthTokenOnUnauthorizedError: ResponseErrorInterceptor = (client, api) => async error => {
  const response = error.response

  if (response && response.status === 401) {
    const authToken = localStorage.getItem(AuthStorageKeys.AUTH_TOKEN)
    const refreshToken = localStorage.getItem(AuthStorageKeys.REFRESH_TOKEN)

    if (authToken) {
      // Error happened on refresh token request, then refresh token is invalid
      if (error.config.url?.match(/refresh_token/)) {
        localStorage.removeItem(AuthStorageKeys.AUTH_TOKEN)
        localStorage.removeItem(AuthStorageKeys.REFRESH_TOKEN)

        throw error
      }

      // Request new auth token
      const tokens = await api.postRefreshToken({
        body: { token: refreshToken ?? '' },
      })

      localStorage.setItem(AuthStorageKeys.AUTH_TOKEN, tokens.data.authToken)

      return client.request(error.config)
    }
  }

  throw error
}

export { processAuthTokenOnUnauthorizedError, storeTokensOnLoginSuccess }
