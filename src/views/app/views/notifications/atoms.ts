import { atom } from 'recoil'

enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
}

enum NotificationPosition {
  TOP_RIGHT = 'TOP_RIGHT',
}

interface Notification {
  title: string
  type: NotificationType
  position?: NotificationPosition
  text?: string
}

const notificationsState = atom<Notification[]>({
  key: 'notificationsState',
  default: [],
})

export { notificationsState, NotificationType, NotificationPosition }
export type { Notification }
