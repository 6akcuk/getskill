import { atom } from 'recoil'
import { InfiniteEntitiesMeta, InfiniteEntitiesPaginationParams } from '../../../hooks'

type SkillSpecialistsListState = InfiniteEntitiesMeta
type SkillSpecialistsListFiltersState = Required<InfiniteEntitiesPaginationParams>
type SkillVideoLessonsListState = InfiniteEntitiesMeta
type SkillVideoLessonsListFiltersState = Required<InfiniteEntitiesPaginationParams>

const skillVideoLessonsListState = atom<SkillVideoLessonsListState>({
  key: 'skillVideoLessonsListState',
  default: {
    isEmpty: true,
    isReachedEnd: false,
  },
})
const skillVideoLessonsListFiltersState = atom<SkillVideoLessonsListFiltersState>({
  key: 'skillVideoLessonsListFiltersState',
  default: {
    page: 1,
    limit: 3,
  },
})
const skillSpecialistsListState = atom<SkillSpecialistsListState>({
  key: 'skillSpecialistsListState',
  default: {
    isEmpty: true,
    isReachedEnd: false,
  },
})
const skillSpecialistsListFiltersState = atom<SkillSpecialistsListFiltersState>({
  key: 'skillSpecialistsListFiltersState',
  default: {
    page: 1,
    limit: 3,
  },
})

export {
  skillSpecialistsListFiltersState,
  skillSpecialistsListState,
  skillVideoLessonsListFiltersState,
  skillVideoLessonsListState,
}
