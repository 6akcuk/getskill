import React, { useMemo, ReactNode } from 'react'
import SpecialistsListErrorBoundary from './SpecialistsListErrorBoundary'
import { PreviewSpecialistSkeleton } from '../PreviewSpecialist'
import { Suspense } from '../../../../components'
import * as S from './SpecialistsListWrapper.styles'

interface SpecialistsListWrapperProps {
  children: ReactNode
  className?: string
  onRefresh?: () => void
  gridSize?: number
  numberOfSkeletons?: number
}

function SpecialistsListWrapper(props: SpecialistsListWrapperProps) {
  const fallback = useMemo(
    () =>
      Array(props.numberOfSkeletons ?? props.gridSize ?? 3)
        .fill(0)
        .map((_, index) => <PreviewSpecialistSkeleton key={index} />),
    [],
  )

  return (
    <S.Wrapper>
      <SpecialistsListErrorBoundary onRefresh={props.onRefresh}>
        <S.ListWrapper className={props.className} gridSize={props.gridSize}>
          <Suspense fallback={fallback}>{props.children}</Suspense>
        </S.ListWrapper>
      </SpecialistsListErrorBoundary>
    </S.Wrapper>
  )
}

export default SpecialistsListWrapper
export { SpecialistsListWrapper }
