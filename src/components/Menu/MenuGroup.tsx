import React, { ReactNode } from 'react'
import * as S from './MenuGroup.styles'

interface MenuGroupProps {
  children: ReactNode
}

function MenuGroup(props: MenuGroupProps) {
  return <S.MenuGroup>{props.children}</S.MenuGroup>
}

export default MenuGroup
export { MenuGroup }
export type { MenuGroupProps }
