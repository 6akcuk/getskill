import React from 'react'
import { VideoLesson } from '../../../../api'
import PreviewVideoLesson, { PreviewVideoLessonSkeleton } from '../PreviewVideoLesson'

interface VideoLessonsListProps {
  isValidating: boolean
  data?: VideoLesson[]
  hideAuthor?: boolean
}

function VideoLessonsList(props: VideoLessonsListProps) {
  return (
    <>
      {props.isValidating && <PreviewVideoLessonSkeleton />}
      {props.data?.map(videoLesson => (
        <PreviewVideoLesson hideAuthor={props.hideAuthor} key={videoLesson.id} videoLesson={videoLesson} />
      ))}
    </>
  )
}

export default VideoLessonsList
export { VideoLessonsList }
