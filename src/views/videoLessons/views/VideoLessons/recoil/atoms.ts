import { atom } from 'recoil'

const offsetState = atom({
  key: 'videoLessonsOffset',
  default: 1,
})

export { offsetState }
