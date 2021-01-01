import { atom } from 'recoil'
import { User } from '../../../api'

type BannerType = 'phoneVerified'

interface BannerStatus {
  viewed: boolean
  lastDate: string | null
}

const currentUserState = atom<User | null>({
  key: 'currentUserState',
  default: null,
})

const authTokenState = atom<string | null>({
  key: 'authTokenState',
  default: null,
  persistence_UNSTABLE: {
    type: 'authToken',
  },
})

const refreshTokenState = atom<string | null>({
  key: 'refreshTokenState',
  default: null,
  persistence_UNSTABLE: {
    type: 'refreshToken',
  },
})

const authBannerStatuses = atom<Record<BannerType, BannerStatus>>({
  key: 'authBannerStatusesState',
  default: {
    phoneVerified: {
      viewed: false,
      lastDate: null,
    },
  },
  persistence_UNSTABLE: {
    type: 'authBannerStatuses',
  },
})

export { authBannerStatuses, authTokenState, currentUserState, refreshTokenState }
