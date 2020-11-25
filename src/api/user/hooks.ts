import { createRequestHook } from '../utils'

const useUpdateProfile = createRequestHook(api => api.patchProfile)

const useUpdateProfileContacts = createRequestHook(api => api.patchProfileContacts)

export { useUpdateProfile, useUpdateProfileContacts }
