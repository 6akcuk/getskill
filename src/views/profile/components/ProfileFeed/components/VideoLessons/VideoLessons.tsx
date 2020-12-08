import React from 'react'
import { PreviewVideoLessonSkeleton, PreviewVideoLesson } from '../../../../../videoLessons'
import { useVideoLessons } from '../../../../../../hooks'

interface VideoLessonsProps {
  userId: string
}

function VideoLessons(props: VideoLessonsProps) {
  const { data, isValidating } = useVideoLessons({ userId: props.userId })

  return (
    <>
      {isValidating && <PreviewVideoLessonSkeleton />}
      {data?.map(videoLesson => (
        <PreviewVideoLesson hideAuthor={true} key={videoLesson.id} videoLesson={videoLesson} />
      ))}
    </>
  )
}

export default VideoLessons
export { VideoLessons }
export type { VideoLessonsProps }
