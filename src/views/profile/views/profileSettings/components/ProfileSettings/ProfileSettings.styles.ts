import styled from 'styled-components'
import SideNav from '../SideNav'

const Wrapper = styled.div`
  display: grid;
  grid-column-grap: 1.25rem;
  column-gap: 1.25rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`

const Navigation = styled(SideNav)`
  grid-column: span 3 / span 3;
`

const Content = styled.div`
  grid-column: span 9 / span 9;
`

export { Content, Navigation, Wrapper }
