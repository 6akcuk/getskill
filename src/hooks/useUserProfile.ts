import useSWR from 'swr'
import { UserProfile } from '../api'

function useUserProfile(userId: string) {
  const { data } = useSWR<UserProfile>(`/api/profile/${userId}`)

  return data
}

export default useUserProfile
export { useUserProfile }
