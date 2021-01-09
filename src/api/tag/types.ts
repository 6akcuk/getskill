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

interface ServiceTag<Type = TagType> {
  tag: Tag<Type>
}

export { TagType }
export type { ServiceTag, Tag }
