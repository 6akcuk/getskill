import { atom } from 'recoil'

interface VideoLessonsListState {
  isEmpty: boolean
  isReachedEnd: boolean
}

interface VideoLessonsListFiltersState {
  page: number
  limit: number
}

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
