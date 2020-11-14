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
        <Suspense fallback={<Spinner />}>
          <S.Main>
            <S.MainContainer>{props.children}</S.MainContainer>
          </S.Main>
        </Suspense>
      </S.MainColumn>
    </S.Wrapper>
  )
}

export default DesktopLayout
export { DesktopLayout }
