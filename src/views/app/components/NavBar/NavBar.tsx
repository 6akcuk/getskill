import React from 'react'
import { useTranslation } from 'react-i18next'
import { createStylableComponent } from '../../../../utils'
import * as S from './NavBar.styles'

interface NavBarProps {
  className?: string
}

function NavBar(props: NavBarProps) {
  const { t } = useTranslation('app')

  return (
    <S.Wrapper className={props.className}>
      <S.Content>
        <S.NavLink to="/videolessons">{t('navbar.videolessons')}</S.NavLink>
        <S.NavLink to="/specialists">{t('navbar.specialists')}</S.NavLink>
      </S.Content>
    </S.Wrapper>
  )
}

const StylableNavBar = createStylableComponent(S, NavBar)

export default StylableNavBar
export { StylableNavBar as NavBar }
