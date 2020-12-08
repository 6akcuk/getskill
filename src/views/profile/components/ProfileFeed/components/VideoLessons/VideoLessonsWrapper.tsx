import React, { useMemo } from 'react'
import { Suspense } from '../../../../../../components'
import VideoLessons, { VideoLessonsProps } from './VideoLessons'
import { PreviewVideoLessonSkeleton } from '../../../../../videoLessons'
import * as S from './VideoLessonsWrapper.styles'

type VideoLessonsWrapperProps = VideoLessonsProps

function VideoLessonsWrapper(props: VideoLessonsWrapperProps) {
  const fallback = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((_, index) => <PreviewVideoLessonSkeleton key={index} />),
    [],
  )

  return (
    <S.Wrapper>
      <Suspense fallback={fallback}>
        <VideoLessons {...props} />
      </Suspense>
    </S.Wrapper>
  )
}

export default VideoLessonsWrapper
export { VideoLessonsWrapper }
