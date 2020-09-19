import React, { ReactNode, useCallback } from 'react'
import { Wrapper, Backdrop, Content } from './Modal.styles'
import { createPortal } from 'react-dom'
import { useNavigateBack } from '../../hooks'

interface ModalProps {
  backdrop?: boolean
  children: ReactNode
}

function Modal(props: ModalProps) {
  const { backdrop = true, children } = props
  const navigateBack = useNavigateBack()

  const handleBackdropClick = useCallback(() => {
    navigateBack()
  }, [navigateBack])

  return createPortal(
    <Wrapper>
      {backdrop && <Backdrop onClick={handleBackdropClick} />}
      <Content>{children}</Content>
    </Wrapper>,
    document.getElementById('modal')!,
  )
}

export default Modal
