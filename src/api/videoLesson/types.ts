interface VideoLesson {
  id: number
  userId: number
  isDraft: boolean
  uid: string
  uploadUrl: string
  name: string
  description: string | null
  createdAt: string
}

export type { VideoLesson }
