import React, { useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { notificationsState } from '../../atoms'
import Notification from '../Notification'
import * as S from './NotificationsProvider.styles'

function NotificationsProvider() {
  const notifications = useRecoilValue(notificationsState)
  const setNotifications = useSetRecoilState(notificationsState)
  const handleClose = useCallback(
    (idx: number) => {
      setNotifications(notifications => notifications.filter((_, index) => index !== idx))
    },
    [setNotifications],
  )

  return createPortal(
    <S.Wrapper>
      {notifications.map((notification, idx) => (
        <Notification key={idx} {...notification} onClose={() => handleClose(idx)} />
      ))}
    </S.Wrapper>,
    document.getElementById('notifications')!,
  )
}

export default NotificationsProvider
export { NotificationsProvider }
