import { createRequestHook } from '../utils'

const useLogin = createRequestHook(api => api.postLogin)
const useRegister = createRequestHook(api => api.postRegister)
const useSendCode = createRequestHook(api => api.postSendCode)
const useVerifyCode = createRequestHook(api => api.postVerifyCode)
const useChangePassword = createRequestHook(api => api.postChangePassword)

export { useChangePassword, useLogin, useRegister, useSendCode, useVerifyCode }
