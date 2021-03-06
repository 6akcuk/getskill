import { useRecoilValue } from 'recoil'
import { skillVideoLessonsListFiltersState } from '../recoil'
import { useVideoLessons } from '../../../hooks'

interface UseSkillVideoLessonsListProps {
  skill: string
}

function useSkillVideoLessonsList(props: UseSkillVideoLessonsListProps) {
  const filters = useRecoilValue(skillVideoLessonsListFiltersState)

  return useVideoLessons({
    skill: props.skill,
    limit: filters.limit,
  })
}

export default useSkillVideoLessonsList
export { useSkillVideoLessonsList }
export type { UseSkillVideoLessonsListProps }
