import styled from 'styled-components'
import {
  Button as BaseButton,
  Dropdown as BaseDropdown,
  UserAvatar as BaseUserAvatar,
  MenuDivider as BaseMenuDivider,
  MenuGroup as BaseMenuGroup,
  MenuItem as BaseMenuItem,
} from '../../../../components'

const UserButton = styled(BaseButton).attrs({ look: 'primary' })`
  display: flex;
  border-radius: 9999px;
  padding: 0;
  background: ${props => props.theme.colors.white};
  box-shadow: none;

  &:hover {
    background: ${props => props.theme.colors.white};
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
