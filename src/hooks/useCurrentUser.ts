import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authTokenState, currentUserState } from '../views/auth/recoil/atoms'
import useSWR from 'swr'
import { useEffect } from 'react'
import { User } from '../api/types'

function useCurrentUser() {
  const authToken = useRecoilValue<string | null>(authTokenState)
  const setCurrentUser = useSetRecoilState(currentUserState)
  const { data } = useSWR<User>(authToken ? '/api/me' : null)

  useEffect(() => {
    setCurrentUser(data ?? null)
  }, [data, setCurrentUser])

  return data ?? null
}

export { useCurrentUser }
