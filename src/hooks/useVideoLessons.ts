import useSWR from 'swr'
import qs, { ParsedUrlQueryInput } from 'querystring'

interface UseVideoLessonsProps extends ParsedUrlQueryInput {
  userId?: string
  offset?: number
  limit?: number
}

function useVideoLessons(props?: UseVideoLessonsProps) {
  const params = qs.stringify(props ?? {})

  return useSWR(`/api/videolessons?${params}`)
}

export default useVideoLessons
export { useVideoLessons }
