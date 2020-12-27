import { atom } from 'recoil'

const forgotPasswordStep = atom({
  key: 'forgotPasswordStep',
  default: 1,
})

const forgotPasswordPhone = atom<string | null>({
  key: 'forgotPasswordPhone',
  default: null,
})

const forgotPasswordCode = atom<string | null>({
  key: 'forgotPasswordCode',
  default: null,
})

const forgotPasswordToken = atom<string | null>({
  key: 'forgotPasswordToken',
  default: null,
})

export { forgotPasswordCode, forgotPasswordPhone, forgotPasswordStep, forgotPasswordToken }
