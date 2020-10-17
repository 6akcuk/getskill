import { createRequestHook } from '../utils'

const useDraft = createRequestHook(api => api.postDraft)

export { useDraft }
