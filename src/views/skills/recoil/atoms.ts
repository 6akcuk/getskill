import { atom } from 'recoil'
import { InfiniteEntitiesMeta, InfiniteEntitiesPaginationParams } from '../../../hooks'

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

export { skillVideoLessonsListFiltersState, skillVideoLessonsListState }
