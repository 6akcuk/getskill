import React from 'react'
import * as S from './SideNav.styles'
import { useTranslation } from 'react-i18next'
import { useRouteMatch } from 'react-router-dom'

interface SideNavProps {
  className?: string
}

function SideNav(props: SideNavProps) {
  const { t } = useTranslation('profile')
  const { path } = useRouteMatch()

  return (
    <S.Aside className={props.className}>
      <S.Nav>
        <S.NavItem to={`${path}/account`}>{t('nav.account')}</S.NavItem>
        <S.NavItem to={`${path}/contacts`}>{t('nav.contacts')}</S.NavItem>
        <S.NavItem to={`${path}/security`}>{t('nav.security')}</S.NavItem>
        <S.NavItem to={`${path}/verification`}>{t('nav.verification')}</S.NavItem>
      </S.Nav>
    </S.Aside>
  )
}

export default SideNav
export { SideNav }
