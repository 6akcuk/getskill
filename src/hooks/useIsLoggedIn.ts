import { useRecoilValue } from 'recoil'
import { isLoggedInState } from '../views/auth/recoil/selectors'

function useIsLoggedIn() {
  const loggedIn = useRecoilValue(isLoggedInState)

  return loggedIn
}

export { useIsLoggedIn }
