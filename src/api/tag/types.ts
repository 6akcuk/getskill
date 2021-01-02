import { VideoLesson } from '../videoLesson/types'

enum TagType {
  SKILL = 'SKILL',
}

interface Tag<Type = TagType> {
  id: number
  name: string
  type: Type
  videoLessonId: number

  VideoLesson: VideoLesson
}

export { TagType }
export type { Tag }
