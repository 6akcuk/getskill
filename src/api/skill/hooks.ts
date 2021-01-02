import { createRequestHook } from '../utils'

const useSkills = createRequestHook(api => api.getSkills)

export { useSkills }
