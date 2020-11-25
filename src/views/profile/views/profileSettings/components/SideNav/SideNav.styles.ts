import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Aside = styled.aside``
const Nav = styled.nav``
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  color: ${props => props.theme.colors.primaryAccentText};
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.colors.lightBackground};
  }

  &.active {
    background-color: ${props => props.theme.colors.lightBackground};

    &:hover {
      background-color: ${props => props.theme.colors.white};
    }
  }

  &:not(:first-child) {
    margin-top: 0.5rem;
  }
`

export { Aside, Nav, NavItem }
