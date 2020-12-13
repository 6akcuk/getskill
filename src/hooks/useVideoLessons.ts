import { VideoLesson } from '../api'
import useInfiniteEntities from './useInfiniteEntities'

interface UseVideoLessonsProps {
  userId?: string
  limit?: number
}

function useVideoLessons(props?: UseVideoLessonsProps) {
  return useInfiniteEntities<VideoLesson>({
    endpoint: '/api/videolessons',
    params: props,
    limit: props?.limit,
  })
}

export default useVideoLessons
export { useVideoLessons }
