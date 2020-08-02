import React, { ReactNode } from 'react'
import { Wrapper, Backdrop, Content } from './Modal.styles'
import { createPortal } from 'react-dom'

interface ModalProps {
  backdrop?: boolean
  children: ReactNode
}

function Modal(props: ModalProps) {
  const { backdrop = true, children } = props

  return createPortal(
    <Wrapper>
      {backdrop && <Backdrop />}
      <Content>{children}</Content>
    </Wrapper>,
    document.getElementById('modal')!,
  )
}

export default Modal
