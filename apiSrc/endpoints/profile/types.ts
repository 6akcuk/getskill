import { InputJsonObject } from '@prisma/client'

type UserContactResource = 'vkontakte' | 'instagram' | 'twitter' | 'facebook'
type UserContacts = Record<UserContactResource, string> & InputJsonObject

export type { UserContacts, UserContactResource }
