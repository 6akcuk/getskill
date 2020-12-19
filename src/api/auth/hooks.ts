import { createRequestHook } from '../utils'

const useLogin = createRequestHook(api => api.postLogin)
const useRegister = createRequestHook(api => api.postRegister)
const useSendCode = createRequestHook(api => api.postSendCode)

export { useLogin, useRegister, useSendCode }
