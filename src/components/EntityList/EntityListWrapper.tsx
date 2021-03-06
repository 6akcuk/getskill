import React, { useMemo, ReactNode, ComponentType } from 'react'
import { Suspense } from '../Suspense'
import * as S from './EntityListWrapper.styles'

interface EntityListWrapperErrorBoundaryProps {
  children: ReactNode
  onRefresh?: () => void
}
interface EntityListWrapperProps {
  children: ReactNode
  skeleton: ComponentType
  errorBoundary: ComponentType<EntityListWrapperErrorBoundaryProps>
  className?: string
  onRefresh?: () => void
  gridSize?: number
  numberOfSkeletons?: number
}

function EntityListWrapper(props: EntityListWrapperProps) {
  const fallback = useMemo(
    () =>
      Array(props.numberOfSkeletons ?? props.gridSize ?? 3)
        .fill(0)
        .map((_, index) => <props.skeleton key={index} />),
    [props.numberOfSkeletons, props.gridSize],
  )

  return (
    <S.Wrapper>
      <props.errorBoundary onRefresh={props.onRefresh}>
        <S.ListWrapper className={props.className} gridSize={props.gridSize}>
          <Suspense fallback={fallback}>{props.children}</Suspense>
        </S.ListWrapper>
      </props.errorBoundary>
    </S.Wrapper>
  )
}

export default EntityListWrapper
export { EntityListWrapper }
export type { EntityListWrapperErrorBoundaryProps, EntityListWrapperProps }
