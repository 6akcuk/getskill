import { selector } from 'recoil'
import { currentUserState, authBannerStatuses } from './atoms'

const isLoggedInState = selector({
  key: 'isLoggedInState',
  get: ({ get }) => get(currentUserState) !== null,
})

const phoneVerifiedBannerState = selector({
  key: 'phoneVerifiedBannerState',
  get: ({ get }) => get(authBannerStatuses).phoneVerified,
})

export { isLoggedInState, phoneVerifiedBannerState }
