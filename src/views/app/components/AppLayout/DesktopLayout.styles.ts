import styled from 'styled-components'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
`

const SidebarColumn = styled.div`
  display: flex;
  flex-shrink: 0;
`

const StyledSidebar = styled(Sidebar)`
  width: 16rem;
`

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 0;
  overflow: hidden;
  flex: 1 1 0%;
`

const Main = styled.main`
  display: block;
  position: relative;
  overflow-y: auto;
  flex: 1 1 0%;
  z-index: 0;
  padding: 1.5rem;
`

const TopBar = styled(Topbar)``

export { Main, MainColumn, SidebarColumn, StyledSidebar, TopBar, Wrapper }
