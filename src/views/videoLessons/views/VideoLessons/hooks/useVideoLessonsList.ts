import { useRecoilValue } from 'recoil'
import { videoLessonsListFiltersState } from '../recoil'
import { useVideoLessons } from '../../../../../hooks'

function useVideoLessonsList() {
  const filters = useRecoilValue(videoLessonsListFiltersState)

  return useVideoLessons({
    limit: filters.limit,
  })
}

export default useVideoLessonsList
export { useVideoLessonsList }
