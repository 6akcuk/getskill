import styled from 'styled-components'
import BaseOverlay from '../Overlay'
import BaseMenu from '../Menu'

const Overlay = styled(BaseOverlay)``
const Menu = styled(BaseMenu)`
  border-radius: ${props => props.theme.sizes.radius.md};
  box-shadow: ${props => props.theme.shadow.xs};
`

export { Menu, Overlay }
