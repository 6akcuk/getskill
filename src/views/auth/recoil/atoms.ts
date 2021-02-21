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
  persistence_UNSTABLE: {
    type: 'currentUserState',
  },
})

const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: false,
  persistence_UNSTABLE: {
    type: 'isLoggedInState',
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

export { authBannerStatuses, currentUserState, isLoggedInState }
