import styled from 'styled-components'
import BaseSearchBar from '../SearchBar'
import BaseUserControls from '../UserControls'
import { Spinner } from '../../../../components'
import { Link } from 'react-router-dom'
import BaseNavBar from '../NavBar'

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  height: 4rem;
  z-index: 10;
  background: ${props => props.theme.colors.white};
`

const Content = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 70rem;
`

const Logo = styled(Link)`
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.colors.primaryText};
  margin-right: 3rem;
`

const SearchBar = styled(BaseSearchBar)``

const UserControls = styled(BaseUserControls)`
  margin-left: 1.5rem;
`

const SuspenseSpinner = styled(Spinner)`
  width: 48px;
  height: 48px;
`

const NavBar = styled(BaseNavBar)`
  flex: 1 1 0%;
`

export { Content, Logo, NavBar, SearchBar, SuspenseSpinner, UserControls, Wrapper }
