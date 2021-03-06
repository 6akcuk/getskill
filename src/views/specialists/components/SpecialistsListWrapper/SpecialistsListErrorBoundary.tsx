import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary, EntityListWrapperErrorBoundaryProps } from '../../../../components'
import { PreviewSpecialistSkeleton } from '../PreviewSpecialist'
import * as S from './SpecialistsListErrorBoundary.styles'

type SpecialistsListErrorBoundaryProps = EntityListWrapperErrorBoundaryProps

function SpecialistsListErrorBoundary(props: SpecialistsListErrorBoundaryProps) {
  const { t } = useTranslation('specialist')

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
          <PreviewSpecialistSkeleton />
        </S.Wrapper>
      }>
      {props.children}
    </ErrorBoundary>
  )
}

export default SpecialistsListErrorBoundary
export { SpecialistsListErrorBoundary }
