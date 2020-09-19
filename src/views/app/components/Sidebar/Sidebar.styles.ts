import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  height: 0;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  background: ${props => props.theme.colors.sidebarPrimary};
  color: ${props => props.theme.colors.white};
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`

const NavMenu = styled.nav`
  flex: 1;
  padding: 1rem 0.5rem;
  background: ${props => props.theme.colors.sidebarBackground};
`

export { Content, LogoWrapper, NavMenu, NavWrapper, Wrapper }
