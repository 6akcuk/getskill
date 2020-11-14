import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLink = styled(Link)<{ active?: boolean }>`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  height: 4rem;
  padding: 0 0.25rem;
  color: ${props => (props.active ? props.theme.colors.primaryAccentText : props.theme.colors.secondaryText)};
  text-decoration: none;
  border-bottom: solid 2px ${props => (props.active ? props.theme.colors.primary : 'transparent')};

  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    border-bottom-color: ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.primaryText};
  }
`

export { NavLink }
