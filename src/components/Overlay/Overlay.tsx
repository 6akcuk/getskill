import { Placement } from '@popperjs/core'
import React, { ReactNode, useState, useRef, useCallback } from 'react'
import { usePopper } from 'react-popper'
import { useClickAway } from 'ahooks'
import { OverlayPosition } from './types'
import * as S from './Overlay.styles'
import { useOverlayOffset } from './useOverlayOffset'

type OverlayTrigger = 'focus' | 'hover' | 'click' | 'none'

interface OverlayProps {
  popper: ReactNode
  children: ReactNode
  className?: string
  trigger?: OverlayTrigger[]
  showArrow?: boolean
  placement?: Placement
  isOpen?: boolean
  position?: OverlayPosition
}

function Overlay(props: OverlayProps) {
  const { showArrow = false, trigger = ['hover', 'focus'] } = props
  const [isOpen, setIsOpen] = useState(props.isOpen ?? false)
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const handleEnter = useCallback(() => {
    if (trigger.includes('hover') || trigger.includes('focus')) {
      setIsOpen(true)
    }
  }, [trigger])
  const handleLeave = useCallback(() => {
    if (trigger.includes('hover') || trigger.includes('focus')) {
      setIsOpen(false)
    }
  }, [trigger])
  const handleClick = useCallback(() => {
    if (trigger.includes('click')) {
      setIsOpen(isCurrentlyOpen => !isCurrentlyOpen)
    }
  }, [trigger])

  useClickAway(() => {
    setIsOpen(false)
  }, wrapperRef)

  const offset = useOverlayOffset(wrapperRef)
  const { state, styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: props.placement,
    modifiers: [
      { name: 'offset', options: { offset: [offset[0], offset[1]] } },
      { name: 'arrow', options: { element: arrowElement, padding: 5 } },
    ],
  })

  return (
    <S.Wrapper ref={wrapperRef} className={props.className}>
      <S.Reference
        ref={setReferenceElement}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        onClick={handleClick}>
        {props.children}
      </S.Reference>
      {isOpen && (
        <S.Popper ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          {props.popper}
          {showArrow && (
            <S.Arrow placement={state?.placement ?? 'bottom'} ref={setArrowElement} style={styles.arrow} />
          )}
        </S.Popper>
      )}
    </S.Wrapper>
  )
}

export default Overlay
export { Overlay }
export type { OverlayProps }
