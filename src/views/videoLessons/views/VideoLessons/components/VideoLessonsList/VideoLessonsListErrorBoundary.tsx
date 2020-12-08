import React, { ReactNode, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary } from '../../../../../../components'
import { PreviewVideoLessonSkeleton } from '../../../../components'
import * as S from './VideoLessonsListErrorBoundary.styles'

interface VideoLessonsListErrorBoundaryProps {
  children: ReactNode
}

function VideoLessonsListErrorBoundary(props: VideoLessonsListErrorBoundaryProps) {
  const { t } = useTranslation('videolesson')

  const handleRefresh = useCallback(() => {}, [])

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
