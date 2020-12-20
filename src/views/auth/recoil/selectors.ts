import { selector } from 'recoil'
import { authBannerStatuses, authTokenState } from './atoms'

const isLoggedInState = selector({
  key: 'isLoggedInState',
  get: ({ get }) => get(authTokenState) !== null,
})

const phoneVerifiedBannerState = selector({
  key: 'phoneVerifiedBannerState',
  get: ({ get }) => get(authBannerStatuses).phoneVerified,
})

export { isLoggedInState, phoneVerifiedBannerState }
