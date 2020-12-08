import useSWR from 'swr'
import qs, { ParsedUrlQueryInput } from 'querystring'
import { VideoLesson } from '../api'

interface UseVideoLessonsProps extends ParsedUrlQueryInput {
  userId?: string
  offset?: number
  limit?: number
}

function useVideoLessons(props?: UseVideoLessonsProps) {
  const params = qs.stringify(props ?? {})

  return useSWR<VideoLesson[]>(`/api/videolessons?${params}`, { suspense: true })
}

export default useVideoLessons
export { useVideoLessons }
