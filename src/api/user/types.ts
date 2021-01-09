import { Asset } from '../shared/types'
import { Specialist } from '../specialists/types'

interface User {
  id: number
  email: string
  phone: string
  role: string
  profile: UserProfile
  specialist: Specialist
  isEmailVerified: boolean
  isPhoneVerified: boolean
}

interface UserProfile {
  publicName: string
  avatar?: UserAvatar
  about?: string
  contacts?: UserContacts
}

type UserContactResource = 'vkontakte' | 'instagram' | 'twitter' | 'facebook'
type UserContacts = Record<UserContactResource, string>

type UserAvatar = Asset

export type { User, UserAvatar, UserContacts, UserContactResource, UserProfile }
