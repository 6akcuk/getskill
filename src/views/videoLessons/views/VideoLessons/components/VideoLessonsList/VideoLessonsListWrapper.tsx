import React, { Suspense, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import VideoLessonsListErrorBoundary from './VideoLessonsListErrorBoundary'
import { PreviewVideoLessonSkeleton } from '../../../../components'
import * as S from './VideoLessonsListWrapper.styles'

function VideoLessonsListWrapper() {
  const { t } = useTranslation('videolesson')
  const fallback = useMemo(() => Array(3).map((_, index) => <PreviewVideoLessonSkeleton key={index} />), [])

  return (
    <S.Wrapper>
      <S.Title>{t('list.title')}</S.Title>
      <VideoLessonsListErrorBoundary>
        <S.ListWrapper>
          <Suspense fallback={fallback}>
            <S.List />
          </Suspense>
        </S.ListWrapper>
      </VideoLessonsListErrorBoundary>
    </S.Wrapper>
  )
}

export default VideoLessonsListWrapper
export { VideoLessonsListWrapper }
