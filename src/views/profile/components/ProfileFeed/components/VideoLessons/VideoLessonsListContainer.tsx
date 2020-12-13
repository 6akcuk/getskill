import React from 'react'
import { VideoLessonsList } from '../../../../../videoLessons'
import { useVideoLessons } from '../../../../../../hooks'

interface VideoLessonsListContainerProps {
  userId: string
}

function VideoLessonsListContainer(props: VideoLessonsListContainerProps) {
  const response = useVideoLessons({ userId: props.userId })

  return <VideoLessonsList {...response} hideAuthor={true} />
}

export default VideoLessonsListContainer
export { VideoLessonsListContainer }
export type { VideoLessonsListContainerProps }
