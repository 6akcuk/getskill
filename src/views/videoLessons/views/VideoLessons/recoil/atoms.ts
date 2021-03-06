import { atom } from 'recoil'
import { InfiniteEntitiesMeta, InfiniteEntitiesPaginationParams } from '../../../../../hooks'

type VideoLessonsListState = InfiniteEntitiesMeta
type VideoLessonsListFiltersState = Required<InfiniteEntitiesPaginationParams>

const videoLessonsListState = atom<VideoLessonsListState>({
  key: 'videoLessonsListState',
  default: {
    isEmpty: true,
    isReachedEnd: false,
  },
})

const videoLessonsListFiltersState = atom<VideoLessonsListFiltersState>({
  key: 'videoLessonsListFiltersState',
  default: {
    page: 1,
    limit: 3,
  },
})

export { videoLessonsListFiltersState, videoLessonsListState }
