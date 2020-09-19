import React, { ReactNode, Suspense } from 'react'
import * as S from './DesktopLayout.styles'
import { Spinner } from '../../../../components'

interface DesktopLayoutProps {
  children: ReactNode
}

function DesktopLayout(props: DesktopLayoutProps) {
  return (
    <Suspense fallback={<Spinner />}>
      <S.Wrapper>
        <S.SidebarColumn>
          <S.StyledSidebar />
        </S.SidebarColumn>
        <S.MainColumn>
          <S.TopBar />
          <S.Main>{props.children}</S.Main>
        </S.MainColumn>
      </S.Wrapper>
    </Suspense>
  )
}

export default DesktopLayout
export { DesktopLayout }
