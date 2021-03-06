import React from 'react'
import { EntityListWrapperProps } from '../../../../components'
import { PreviewSpecialistSkeleton } from '../PreviewSpecialist'
import SpecialistsListErrorBoundary from './SpecialistsListErrorBoundary'
import * as S from './SpecialistsListWrapper.styles'

type SpecialistsListWrapperProps = Omit<EntityListWrapperProps, 'skeleton' | 'errorBoundary'>

function SpecialistsListWrapper(props: SpecialistsListWrapperProps) {
  return (
    <S.Wrapper>
      <S.ListWrapper
        skeleton={PreviewSpecialistSkeleton}
        errorBoundary={SpecialistsListErrorBoundary}
        {...props}>
        {props.children}
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default SpecialistsListWrapper
export { SpecialistsListWrapper }
