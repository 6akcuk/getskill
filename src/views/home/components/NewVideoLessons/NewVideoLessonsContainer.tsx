import React from 'react'
import { useVideoLessons } from '../../../../hooks'
import { VideoLessonsList } from '../../../videoLessons'

function NewVideoLessonsContainer() {
  const response = useVideoLessons()

  return <VideoLessonsList {...response} />
}

export default NewVideoLessonsContainer
export { NewVideoLessonsContainer }
