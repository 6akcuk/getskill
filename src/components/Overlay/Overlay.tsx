import React, { ReactNode, useState, useRef } from 'react'
import * as S from './Overlay.styles'
import { useClickAway } from 'ahooks'

enum OverlayPosition {
  TOP_LEFT = 'TOP_LEFT',
  TOP_MIDDLE = 'TOP_MIDDLE',
  TOP_RIGHT = 'TOP_RIGHT',
}

interface OverlayProps {
  position?: OverlayPosition
  overlay: ReactNode
  children: ReactNode
  className?: string
}

function Overlay(props: OverlayProps) {
  const { position = OverlayPosition.TOP_RIGHT } = props
  const [showMenu, toggleMenu] = useState(false)
  const ref = useRef(null)

  useClickAway(() => {
    toggleMenu(false)
  }, ref)

  return (
    <S.Wrapper ref={ref} onClick={() => toggleMenu(true)} className={props.className}>
      {props.children}
      <S.OverlayWrapper isVisible={showMenu} position={position}>
        {props.overlay}
      </S.OverlayWrapper>
    </S.Wrapper>
  )
}

export default Overlay
export { Overlay, OverlayPosition }
export type { OverlayProps }
