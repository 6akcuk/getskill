import React, { ReactNode, Suspense } from 'react'
import * as S from './DesktopLayout.styles'
import { Spinner } from '../../../../components'

interface DesktopLayoutProps {
  children: ReactNode
}

function DesktopLayout(props: DesktopLayoutProps) {
  return (
    <S.Wrapper>
      <S.SidebarColumn>
        <S.StyledSidebar />
      </S.SidebarColumn>
      <S.MainColumn>
        <S.TopBar />
        <Suspense fallback={<Spinner />}>
          <S.Main>{props.children}</S.Main>
        </Suspense>
      </S.MainColumn>
    </S.Wrapper>
  )
}

export default DesktopLayout
export { DesktopLayout }
