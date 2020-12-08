import { atom } from 'recoil'

const offsetState = atom({
  key: 'videoLessonsOffset',
  default: 0,
})

export { offsetState }
