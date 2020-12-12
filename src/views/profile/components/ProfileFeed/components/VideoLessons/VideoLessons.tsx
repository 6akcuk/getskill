import React from 'react'
import { VideoLessonsListWrapper } from '../../../../../videoLessons'
import VideoLessonsListContainer from './VideoLessonsListContainer'

interface VideoLessonsProps {
  userId: string
}

function VideoLessons(props: VideoLessonsProps) {
  return (
    <VideoLessonsListWrapper gridSize={2} numberOfSkeletons={4}>
      <VideoLessonsListContainer userId={props.userId} />
    </VideoLessonsListWrapper>
  )
}

export default VideoLessons
export { VideoLessons }
export type { VideoLessonsProps }
