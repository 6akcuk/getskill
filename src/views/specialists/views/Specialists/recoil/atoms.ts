import { atom } from 'recoil'

interface SpecialistsListFiltersState {
  page: number
  limit: number
}

const specialistsListFiltersState = atom<SpecialistsListFiltersState>({
  key: 'specialistsListFiltersState',
  default: {
    page: 1,
    limit: 3,
  },
})

export { specialistsListFiltersState }
