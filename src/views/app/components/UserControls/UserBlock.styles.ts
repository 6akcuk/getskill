import styled from 'styled-components'
import {
  Button as BaseButton,
  Dropdown as BaseDropdown,
  UserAvatar as BaseUserAvatar,
  MenuDivider as BaseMenuDivider,
  MenuGroup as BaseMenuGroup,
  MenuItem as BaseMenuItem,
} from '../../../../components'

const UserButton = styled(BaseButton).attrs({ look: 'text' })`
  border: 2px solid transparent;
  border-radius: 9999px;
  padding: 0;
  box-shadow: none;

  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.border};
  }
`
const UserAvatar = styled(BaseUserAvatar)``
const Dropdown = styled(BaseDropdown)``
const MenuDivider = styled(BaseMenuDivider)``
const MenuGroup = styled(BaseMenuGroup)``
const MenuItem = styled(BaseMenuItem)``
const SignedInBlock = styled.div`
  padding: 0.75rem 1rem;
`

const SignedInAs = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
`
const PublicName = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

export {
  Dropdown,
  MenuDivider,
  MenuGroup,
  MenuItem,
  PublicName,
  SignedInAs,
  SignedInBlock,
  UserAvatar,
  UserButton,
}
