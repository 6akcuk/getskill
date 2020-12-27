import { Prisma } from '@prisma/client'

type UserContactResource = 'vkontakte' | 'instagram' | 'twitter' | 'facebook'
type UserContacts = Record<UserContactResource, string> & Prisma.InputJsonObject

export type { UserContacts, UserContactResource }
