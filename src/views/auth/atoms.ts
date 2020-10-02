import { atom } from 'recoil'
import { User } from '../../api'

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

export { authTokenState, currentUserState }
