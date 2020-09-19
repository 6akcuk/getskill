import React from 'react'
import * as S from './Sidebar.styles'

interface SidebarProps {
  className?: string
}

function Sidebar(props: SidebarProps) {
  return (
    <S.Wrapper className={props.className}>
      <S.Content>
        <S.LogoWrapper>Get-Skill</S.LogoWrapper>
        <S.NavWrapper>
          <S.NavMenu />
        </S.NavWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Sidebar
export { Sidebar }
