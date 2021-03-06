import { VideoLesson } from '../videoLesson/types'
import { createEnum, Enum } from '../../utils'

const TagType = createEnum({
  SKILL: 'SKILL',
})

type TagType = Enum<typeof TagType>

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
