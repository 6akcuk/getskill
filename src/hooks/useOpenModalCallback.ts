import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'
import { LocationState } from './useLocation'

function useOpenModalCallback() {
  const history = useHistory<LocationState>()

  return useCallback(
    (url: string) => {
      history.push(url, { modal: true })
    },
    [history],
  )
}

export default useOpenModalCallback
export { useOpenModalCallback }
