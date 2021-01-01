import { ResponseErrorInterceptor } from '../../utils'

const processAuthTokenOnUnauthorizedError: ResponseErrorInterceptor = (client, api) => async error => {
  const response = error.response

  if (response && response.status === 401) {
    const recoilPersist = localStorage.getItem('recoil-persist')
    const state = recoilPersist ? JSON.parse(recoilPersist) : null

    if (state) {
      // Error happened on refresh token request, then refresh token is invalid
      if (error.config.url?.match(/refresh_token/)) {
        state.authTokenState = null
        state.refreshTokenState = null

        localStorage.setItem('recoil-persist', JSON.stringify(state))

        throw error
      }

      // Request new auth token
      const tokens = await api.postRefreshToken({
        body: { token: state.refreshTokenState },
      })

      state.authTokenState = tokens.data.authToken

      localStorage.setItem('recoil-persist', JSON.stringify(state))

      return client.request(error.config)
    }
  }

  throw error
}

export { processAuthTokenOnUnauthorizedError }
