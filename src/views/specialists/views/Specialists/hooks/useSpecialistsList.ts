import { useRecoilValue } from 'recoil'
import { specialistsListFiltersState } from '../recoil'
import { useSpecialists } from '../../../../../api'

function useSpecialistsList() {
  const filters = useRecoilValue(specialistsListFiltersState)

  return useSpecialists({
    limit: filters.limit,
  })
}

export default useSpecialistsList
export { useSpecialistsList }
