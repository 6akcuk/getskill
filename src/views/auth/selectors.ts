import { selector } from 'recoil'
import { currentUserState } from './atoms'

const isLoggedInState = selector({
  key: 'isLoggedInState',
  get: ({ get }) => get(currentUserState) !== null,
})

export { isLoggedInState }
