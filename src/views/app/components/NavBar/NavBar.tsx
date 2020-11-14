import React from 'react'
import * as S from './NavBar.styles'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  className?: string
}

function NavBar(props: NavBarProps) {
  const { t } = useTranslation('app')

  return (
    <S.Wrapper className={props.className}>
      <S.Content>
        <S.NavLink to="/videolessons" active={false}>
          {t('navbar.videolessons')}
        </S.NavLink>
      </S.Content>
    </S.Wrapper>
  )
}

export default NavBar
export { NavBar }
