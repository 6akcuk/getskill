import React, { ReactNode, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { useNavigateBack } from '../../hooks'
import { createStylableComponent } from '../../utils'
import Suspense from '../Suspense'
import * as S from './Modal.styles'

interface ModalProps {
  className?: string
  animationTimeout?: number
  backdrop?: boolean
  in?: boolean
  children: ReactNode
}

function Modal(props: ModalProps) {
  const { backdrop = true, children } = props
  const navigateBack = useNavigateBack()
  const animationTimeout = props.animationTimeout ?? 250

  const handleBackdropClick = useCallback(() => {
    navigateBack()
  }, [navigateBack])

  return createPortal(
    <CSSTransition in={props.in ?? true} timeout={animationTimeout} unmountOnExit={true} appear={true}>
      <S.Wrapper className={props.className}>
        {backdrop && <S.Backdrop onClick={handleBackdropClick} />}
        <S.Content style={{ transitionDuration: `${animationTimeout}ms` }}>
          <Suspense>{children}</Suspense>
        </S.Content>
      </S.Wrapper>
    </CSSTransition>,
    document.getElementById('modal')!,
  )
}

const StylableModal = createStylableComponent(S, Modal)

export default StylableModal
export { StylableModal as Modal }
export type { ModalProps }
