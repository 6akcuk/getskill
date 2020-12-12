import React from 'react'
import { VideoLessonsList } from '../../../../../videoLessons'
import { useVideoLessons } from '../../../../../../hooks'

interface VideoLessonsListContainerProps {
  userId: string
}

function VideoLessonsListContainer(props: VideoLessonsListContainerProps) {
  const { data, isValidating } = useVideoLessons({ userId: props.userId })

  return <VideoLessonsList data={data} isValidating={isValidating} hideAuthor={true} />
}

export default VideoLessonsListContainer
export { VideoLessonsListContainer }
export type { VideoLessonsListContainerProps }
