import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  margin-right: 3rem;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(Link)<{ active?: boolean }>`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  color: ${props => props.theme.colors.secondaryText};
  text-decoration: none;

  background: ${props => (props.active ? props.theme.colors.background : 'transparent')};

  &:hover {
    color: ${props => props.theme.colors.primaryText};
  }
`

export { Content, NavLink, Wrapper }
