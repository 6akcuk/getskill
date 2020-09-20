import React, { ReactNode } from 'react'
import * as S from './MenuItem.styles'

interface MenuItemProps {
  onClick?: () => void
  className?: string
  children: ReactNode
}

function MenuItem(props: MenuItemProps) {
  return (
    <S.MenuItem href="#" className={props.className} onClick={props.onClick}>
      {props.children}
    </S.MenuItem>
  )
}

export default MenuItem
export { MenuItem }
export type { MenuItemProps }
