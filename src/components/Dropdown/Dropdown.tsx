import React, { ReactNode, useMemo } from 'react'
import * as S from './Dropdown.styles'

interface DropdownProps {
  items: ReactNode[]
  children: ReactNode
}

function Dropdown(props: DropdownProps) {
  const overlay = useMemo(() => <S.Menu>{props.items.map(item => item)}</S.Menu>, [props.items])

  return <S.Overlay overlay={overlay}>{props.children}</S.Overlay>
}

export default Dropdown
export { Dropdown }
export type { DropdownProps }
