import { createRequestHook } from '../utils'

const useCreateVideoLesson = createRequestHook(api => api.postVideoLesson)

export { useCreateVideoLesson }
