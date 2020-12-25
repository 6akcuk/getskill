import { useLocation as useRouterLocation } from 'react-router-dom'
import { Location } from 'history'

interface LocationState {
  background?: Location<LocationState>
}

function useLocation() {
  return useRouterLocation<LocationState>()
}

export default useLocation
export { useLocation }
export type { LocationState }
