interface User {
  id: number
  email: string
  phone: string
  role: string
  avatar: string
  publicName: string
  isEmailVerified: boolean
  isPhoneVerified: boolean
}

export type { User }
