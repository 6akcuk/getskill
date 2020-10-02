import { createRequestHook } from '../utils'

const useLogin = createRequestHook(api => api.postLogin)

const useRegister = createRequestHook(api => api.postRegister)

export { useLogin, useRegister }
