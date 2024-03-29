import styled from 'styled-components'
import { NavLink as BaseNavLink } from 'react-router-dom'

const Tabs = styled.nav`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.border[300]};
`

const NavLink = styled(BaseNavLink)`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  height: 4rem;
  padding: 0 0.25rem;
  color: ${props => props.theme.colors.text[500]};
  text-decoration: none;
  border-bottom: solid 2px transparent;
  margin-bottom: -1px;

  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    border-bottom-color: ${props => props.theme.colors.border[300]};
    color: ${props => props.theme.colors.text[700]};
  }

  &.active {
    color: ${props => props.theme.colors.primary[500]};
    border-bottom-color: ${props => props.theme.colors.primary[500]};
  }
`

export { NavLink, Tabs }
