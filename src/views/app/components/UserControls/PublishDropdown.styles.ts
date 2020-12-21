import styled from 'styled-components'
import {
  DropdownButton,
  MenuGroup as BaseMenuGroup,
  MenuItem as BaseMenuItem,
  MenuItemWithLock as BaseMenuItemWithLock,
} from '../../../../components'

const PublishDropdownButton = styled(DropdownButton)`
  display: inline-flex;
  align-items: center;
  line-height: 1rem;
`
const MenuGroup = styled(BaseMenuGroup)``
const MenuItem = styled(BaseMenuItem)``
const MenuItemWithLock = styled(BaseMenuItemWithLock)``

export { MenuGroup, MenuItem, MenuItemWithLock, PublishDropdownButton }
