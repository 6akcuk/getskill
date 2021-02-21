import { useSetRecoilState, useRecoilValue } from 'recoil'
import { currentUserState, isLoggedInState } from '../views/auth/recoil/atoms'
import useSWR from 'swr'
import { useEffect } from 'react'
import { User } from '../api/types'

function useCurrentUser() {
  const isLoggedIn = useRecoilValue(isLoggedInState)
  const setCurrentUser = useSetRecoilState(currentUserState)
  const { data } = useSWR<User>(isLoggedIn ? '/api/me' : null)

  useEffect(() => {
    setCurrentUser(data ?? null)
  }, [data, setCurrentUser])

  return data ?? null
}

export { useCurrentUser }
