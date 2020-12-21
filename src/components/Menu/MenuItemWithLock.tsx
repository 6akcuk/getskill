import React from 'react'
import { Feature, useIsLocked } from '../../features'
import { MenuItemProps } from './MenuItem'
import * as S from './MenuItem.styles'

interface MenuItemWithLockProps extends MenuItemProps {
  lock: Feature
}

function MenuItemWithLock(props: MenuItemWithLockProps) {
  const [isLocked, action] = useIsLocked(props.lock)

  if (isLocked && action === 'deny') {
    return null
  }

  return (
    <S.MenuItem className={props.className} onClick={props.onClick}>
      {props.children}
      {isLocked && <S.MenuItemLockIcon />}
    </S.MenuItem>
  )
}

export default MenuItemWithLock
export { MenuItemWithLock }
