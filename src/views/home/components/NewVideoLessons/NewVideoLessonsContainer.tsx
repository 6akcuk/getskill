import React from 'react'
import { useVideoLessons } from '../../../../hooks'
import { VideoLessonsList } from '../../../videoLessons'

function NewVideoLessonsContainer() {
  const { data, isValidating } = useVideoLessons()

  return <VideoLessonsList data={data} isValidating={isValidating} />
}

export default NewVideoLessonsContainer
export { NewVideoLessonsContainer }
