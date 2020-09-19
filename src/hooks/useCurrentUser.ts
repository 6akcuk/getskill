import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authTokenState, currentUserState } from '../views/auth/atoms'
import useSWR from 'swr'
import { useEffect } from 'react'
import { User } from '../api/types'

function useCurrentUser() {
  const authToken = useRecoilValue<string | null>(authTokenState)
  const setCurrentUser = useSetRecoilState(currentUserState)
  const { data } = useSWR<User>(authToken ? '/api/me' : null)

  useEffect(() => {
    setCurrentUser(authToken ? data : null)
  }, [data, authToken, setCurrentUser])

  if (!authToken) {
    return null
  }

  return data
}

export { useCurrentUser }
