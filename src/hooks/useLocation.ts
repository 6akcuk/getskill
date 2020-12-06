import { useLocation as useRouterLocation } from 'react-router-dom'

interface LocationState {
  modal?: boolean
}

function useLocation() {
  return useRouterLocation<LocationState>()
}

export default useLocation
export { useLocation }
export type { LocationState }
