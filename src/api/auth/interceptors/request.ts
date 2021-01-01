import { AxiosRequestConfig } from 'axios'

function addAuthorizationToken(config: AxiosRequestConfig) {
  const recoilPersist = localStorage.getItem('recoil-persist')
  const token = recoilPersist ? JSON.parse(recoilPersist).authTokenState : null

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
