import { selector } from 'recoil'
import { authBannerStatuses } from './atoms'

const phoneVerifiedBannerState = selector({
  key: 'phoneVerifiedBannerState',
  get: ({ get }) => get(authBannerStatuses).phoneVerified,
})

export { phoneVerifiedBannerState }
