import React, { useMemo } from 'react'
import { Notification as NotificationInterface, NotificationType } from '../../atoms'
import * as S from './Notification.styles'

type NotificationProps = NotificationInterface & {
  onClose: () => void
}

function Notification(props: NotificationProps) {
  const icon = useMemo(() => {
    switch (props.type) {
      case NotificationType.SUCCESS:
        return <S.SuccessIcon />

      case NotificationType.ERROR:
      default:
        return <S.ErrorIcon />
    }
  }, [props.type])

  return (
    <S.Wrapper>
      <S.Container>
        <S.IconSection>{icon}</S.IconSection>
        <S.TextSection>
          <S.Title>{props.title}</S.Title>
          {props.text && <S.Text>{props.text}</S.Text>}
        </S.TextSection>
        <S.CloseSection>
          <S.CloseButton look="text" onClick={props.onClose}>
            <S.CloseIcon />
          </S.CloseButton>
        </S.CloseSection>
      </S.Container>
    </S.Wrapper>
  )
}

export default Notification
export { Notification }
