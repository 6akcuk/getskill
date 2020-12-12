import React, { useMemo, ReactNode } from 'react'
import VideoLessonsListErrorBoundary from './VideoLessonsListErrorBoundary'
import { PreviewVideoLessonSkeleton } from '../PreviewVideoLesson'
import { Suspense } from '../../../../components'
import * as S from './VideoLessonsListWrapper.styles'

interface VideoLessonsListWrapperProps {
  children: ReactNode
  className?: string
  onRefresh?: () => void
  gridSize?: number
  numberOfSkeletons?: number
}

function VideoLessonsListWrapper(props: VideoLessonsListWrapperProps) {
  const fallback = useMemo(
    () =>
      Array(props.numberOfSkeletons ?? props.gridSize ?? 3)
        .fill(0)
        .map((_, index) => <PreviewVideoLessonSkeleton key={index} />),
    [],
  )

  return (
    <S.Wrapper>
      <VideoLessonsListErrorBoundary onRefresh={props.onRefresh}>
        <S.ListWrapper className={props.className} gridSize={props.gridSize}>
          <Suspense fallback={fallback}>{props.children}</Suspense>
        </S.ListWrapper>
      </VideoLessonsListErrorBoundary>
    </S.Wrapper>
  )
}

export default VideoLessonsListWrapper
export { VideoLessonsListWrapper }
