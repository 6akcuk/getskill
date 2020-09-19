import { atom } from 'recoil'

const currentUserState = atom({
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
