import React from 'react'
import { EntityListWrapperProps } from '../../../../components'
import { PreviewVideoLessonSkeleton } from '../PreviewVideoLesson'
import VideoLessonsListErrorBoundary from './VideoLessonsListErrorBoundary'
import * as S from './VideoLessonsListWrapper.styles'

type VideoLessonsListWrapperProps = Omit<EntityListWrapperProps, 'skeleton' | 'errorBoundary'>

function VideoLessonsListWrapper(props: VideoLessonsListWrapperProps) {
  return (
    <S.Wrapper>
      <S.ListWrapper
        skeleton={PreviewVideoLessonSkeleton}
        errorBoundary={VideoLessonsListErrorBoundary}
        {...props}>
        {props.children}
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default VideoLessonsListWrapper
export { VideoLessonsListWrapper }
