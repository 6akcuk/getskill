import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'
import { LocationState, useLocation } from './useLocation'

function useOpenModalCallback() {
  const history = useHistory<LocationState>()
  const location = useLocation()

  return useCallback(
    (url: string) => {
      history.push(url, { background: location.state?.background ?? location })
    },
    [history, location],
  )
}

export default useOpenModalCallback
export { useOpenModalCallback }
