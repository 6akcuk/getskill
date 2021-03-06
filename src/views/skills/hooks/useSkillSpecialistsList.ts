import { useRecoilValue } from 'recoil'
import { skillSpecialistsListFiltersState } from '../recoil'
import { useSpecialists } from '../../../api'

interface UseSkillSpecialistsListProps {
  skill: string
}

function useSkillSpecialistsList(props: UseSkillSpecialistsListProps) {
  const filters = useRecoilValue(skillSpecialistsListFiltersState)

  return useSpecialists({
    skill: props.skill,
    limit: filters.limit,
  })
}

export default useSkillSpecialistsList
export { useSkillSpecialistsList }
export type { UseSkillSpecialistsListProps }
