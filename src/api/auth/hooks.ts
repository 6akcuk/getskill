import { createRequestHook } from '../utils'

const useLogin = createRequestHook(api => api.postLogin)
const useRegister = createRequestHook(api => api.postRegister)
const useSendCode = createRequestHook(api => api.postSendCode)
const useVerifyCode = createRequestHook(api => api.postVerifyCode)

export { useLogin, useRegister, useSendCode, useVerifyCode }
