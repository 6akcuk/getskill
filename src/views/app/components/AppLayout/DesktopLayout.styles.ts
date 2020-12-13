import styled from 'styled-components'
import BaseBanners from '../Banners'
import Topbar from '../Topbar'
import BaseNavBar from '../NavBar'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${props => props.theme.colors.white};
`

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 0;
  overflow: hidden;
  flex: 1 1 0%;
  justify-content: center;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  overflow-y: auto;
  flex: 1 1 0%;
  background: ${props => props.theme.colors.background};
`
const MainContainer = styled.div`
  flex: 1;
  z-index: 0;
  padding: 2.5rem 1.5rem;
  max-width: 70rem;
`

const TopBar = styled(Topbar)``
const NavBar = styled(BaseNavBar)``
const Banners = styled(BaseBanners)``

export { Banners, Main, MainColumn, MainContainer, NavBar, TopBar, Wrapper }
