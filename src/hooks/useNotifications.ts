import { useSetRecoilState } from 'recoil'
import { notificationsState, Notification } from '../views/app/views/notifications/atoms'
import { useCallback } from 'react'

function useNotifications() {
  const setNotifications = useSetRecoilState(notificationsState)

  return {
    push: useCallback(
      (notification: Notification) => {
        setNotifications(oldNotifications => [...oldNotifications, notification])
      },
      [setNotifications],
    ),
  }
}

export default useNotifications
export { useNotifications }
