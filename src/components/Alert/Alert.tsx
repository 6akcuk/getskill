import React, { ReactNode } from 'react'
import * as S from './Alert.styles'

type AlertLook = 'success' | 'warning' | 'danger' | 'info'
interface AlertProps {
  look: AlertLook
  heading?: ReactNode
  className?: string
}

function Alert(props: AlertProps) {
  return (
    <S.Wrapper look={props.look} className={props.className}>
      <S.Icon>{props.look === 'success' && <S.SuccessIcon />}</S.Icon>
      <S.Content>{props.heading && <S.Heading look={props.look}>{props.heading}</S.Heading>}</S.Content>
    </S.Wrapper>
  )
}

export default Alert
export { Alert }
export type { AlertLook, AlertProps }
