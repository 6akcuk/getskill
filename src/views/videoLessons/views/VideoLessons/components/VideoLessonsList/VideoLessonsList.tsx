import React from 'react'
import { useRecoilState } from 'recoil'
import { useVideoLessons } from '../../../../../../hooks'
import { offsetState } from '../../recoil'
import { PreviewVideoLessonSkeleton, PreviewVideoLesson } from '../../../../components'

function VideoLessonsList() {
  const [offset] = useRecoilState(offsetState)
  const { data, isValidating } = useVideoLessons({ offset })

  return (
    <>
      {isValidating && <PreviewVideoLessonSkeleton />}
      {data?.map(videoLesson => (
        <PreviewVideoLesson key={videoLesson.id} videoLesson={videoLesson} />
      ))}
    </>
  )
}

export default VideoLessonsList
export { VideoLessonsList }
