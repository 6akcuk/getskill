import { User } from '../user/types'
import { ServiceTag } from '../tag/types'

interface Video {
  duration: number
  serviceId: string | null
  preview: string | null
}

interface VideoLesson {
  id: number
  userId: number
  poster: string
  uploadUrl: string
  name: string
  description: string | null
  createdAt: string

  tags?: ServiceTag[]
  user: User
  video: Video
}

export type { VideoLesson }
