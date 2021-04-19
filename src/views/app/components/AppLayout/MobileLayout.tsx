import React, { ReactNode } from 'react'
import * as S from './MobileLayout.styles'

interface MobileLayoutProps {
  children: ReactNode
}

function MobileLayout(props: MobileLayoutProps) {
  return (
    <S.Wrapper>
      <S.MainColumn>
        <S.Banners />
        <S.TopBar />
        <S.Main>
          <S.MainContainer>
            <S.Suspense>{props.children}</S.Suspense>
          </S.MainContainer>
        </S.Main>
      </S.MainColumn>
    </S.Wrapper>
  )
}

export default MobileLayout
export { MobileLayout }
