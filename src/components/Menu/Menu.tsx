import React, { ReactNode } from 'react'
import * as S from './Menu.styles'

interface MenuProps {
  className?: string
  children: ReactNode
}

function Menu(props: MenuProps) {
  return <S.Wrapper className={props.className}>{props.children}</S.Wrapper>
}

export default Menu
export { Menu }
export type { MenuProps }
