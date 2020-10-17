import styled from 'styled-components'
import BaseSearchBar from '../SearchBar'
import BaseUserControls from '../UserControls'
import { Spinner } from '../../../../components'

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  position: relative;
  height: 4rem;
  z-index: 10;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: ${props => props.theme.colors.white};
`

const Content = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
  padding: 0 1rem;
`

const SearchBar = styled(BaseSearchBar)`
  flex: 1 1 0%;
`

const UserControls = styled(BaseUserControls)`
  margin-left: 1.5rem;
`

const SuspenseSpinner = styled(Spinner)`
  width: 48px;
  height: 48px;
`

export { Content, SearchBar, SuspenseSpinner, UserControls, Wrapper }
