import { atom } from 'recoil'
import { InfiniteEntitiesPaginationParams } from '../../../../../hooks'

type SpecialistsListFiltersState = Required<InfiniteEntitiesPaginationParams>

const specialistsListFiltersState = atom<SpecialistsListFiltersState>({
  key: 'specialistsListFiltersState',
  default: {
    page: 1,
    limit: 3,
  },
})

export { specialistsListFiltersState }
