import React, { ReactNode, Suspense } from 'react'
import * as S from './DesktopLayout.styles'
import { Spinner } from '../../../../components'

interface DesktopLayoutProps {
  children: ReactNode
}

function DesktopLayout(props: DesktopLayoutProps) {
  return (
    <S.Wrapper>
      <S.MainColumn>
        <S.TopBar />
        <S.Main>
          <S.MainContainer>
            <Suspense fallback={<Spinner />}>{props.children}</Suspense>
          </S.MainContainer>
        </S.Main>
      </S.MainColumn>
    </S.Wrapper>
  )
}

export default DesktopLayout
export { DesktopLayout }
