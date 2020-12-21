import styled from 'styled-components'
import { IconLockClosedSolid } from '../Icons'

const MenuItem = styled.a`
  display: block;
  position: relative;
  padding: 0.5rem 1rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  text-decoration: inherit;
  color: ${props => props.theme.colors.text[700]};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    background: ${props => props.theme.colors.background[100]};
  }
`
const MenuItemLockIcon = styled(IconLockClosedSolid)`
  position: absolute;
  right: 1rem;
  top: 0.55rem;
  color: ${props => props.theme.colors.text[400]};
  --size: 16px;
`

export { MenuItem, MenuItemLockIcon }
