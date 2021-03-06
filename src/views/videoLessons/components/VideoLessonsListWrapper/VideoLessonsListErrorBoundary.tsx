import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary, EntityListWrapperErrorBoundaryProps } from '../../../../components'
import { PreviewVideoLessonSkeleton } from '../PreviewVideoLesson'
import * as S from './VideoLessonsListErrorBoundary.styles'

type VideoLessonsListErrorBoundaryProps = EntityListWrapperErrorBoundaryProps

function VideoLessonsListErrorBoundary(props: VideoLessonsListErrorBoundaryProps) {
  const { t } = useTranslation('videolesson')

  const handleRefresh = useCallback(() => {
    props.onRefresh?.()
  }, [props.onRefresh])

  return (
    <ErrorBoundary
      error={
        <S.Wrapper>
          <S.DisplayError
            title={t('error.generic.title')}
            text={t('error.list')}
            actionText={t('error.button')}
            actionCallback={handleRefresh}
            showAction={true}
          />
          <PreviewVideoLessonSkeleton />
        </S.Wrapper>
      }>
      {props.children}
    </ErrorBoundary>
  )
}

export default VideoLessonsListErrorBoundary
export { VideoLessonsListErrorBoundary }
