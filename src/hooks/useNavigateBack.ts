import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'

function useNavigateBack() {
  const history = useHistory()
  const callback = useCallback(() => {
    history.goBack()
  }, [history])

  return callback
}

export default useNavigateBack
export { useNavigateBack }
