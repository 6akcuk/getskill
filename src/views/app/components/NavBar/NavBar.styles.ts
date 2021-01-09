import styled from 'styled-components'
import { NavLink as BaseNavLink } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  margin-right: 3rem;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

const NavLink = styled(BaseNavLink)`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  color: ${props => props.theme.colors.text[500]};
  text-decoration: none;

  background: transparent;

  &:not(:first-child) {
    margin-left: 0.75rem;
  }

  &:hover {
    color: ${props => props.theme.colors.text[700]};
  }

  &.active {
    background: ${props => props.theme.colors.background[50]};
  }
`

export { Content, NavLink, Wrapper }
