import { User } from '../user/types'

interface VideoLesson {
  id: number
  userId: number
  isDraft: boolean
  isUploaded: boolean
  isReady: boolean
  publicId: string | null
  version: number | null
  poster: string
  uploadUrl: string
  duration: number
  name: string
  description: string | null
  createdAt: string

  user: User
}

export type { VideoLesson }
