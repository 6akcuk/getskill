import styled from 'styled-components'
import { DropdownButton, MenuGroup as BaseMenuGroup, MenuItem as BaseMenuItem } from '../../../../components'

const PublishDropdownButton = styled(DropdownButton)`
  display: inline-flex;
  align-items: center;
  line-height: 1rem;
`
const MenuGroup = styled(BaseMenuGroup)``
const MenuItem = styled(BaseMenuItem)``

export { MenuGroup, MenuItem, PublishDropdownButton }
