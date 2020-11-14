interface VideoLesson {
  id: number
  userId: number
  isDraft: boolean
  isUploaded: boolean
  isReady: boolean
  uid: string
  poster: string
  uploadUrl: string
  duration: number
  name: string
  description: string | null
  createdAt: string
}

export type { VideoLesson }
