import styled from 'styled-components'

const MenuItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  text-decoration: inherit;
  color: ${props => props.theme.colors.primaryText};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    color: ${props => props.theme.colors.sidebarPrimary};
    background: ${props => props.theme.colors.background};
  }
`

export { MenuItem }
