import styled from 'styled-components'
import BaseBanners from '../Banners'
import Topbar from '../Topbar'
import BaseNavBar from '../NavBar'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
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
  background: ${props => props.theme.colors.background[100]};
`
const MainContainer = styled.div`
  flex: 1;
  z-index: 0;
  padding: 3rem 2rem;
  max-width: 70rem;
`

const TopBar = styled(Topbar)``
const NavBar = styled(BaseNavBar)``
const Banners = styled(BaseBanners)``

export { Banners, Main, MainColumn, MainContainer, NavBar, TopBar, Wrapper }
