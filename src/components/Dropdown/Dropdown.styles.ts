import styled from 'styled-components'
import BaseOverlay from '../Overlay'
import BaseMenu from '../Menu'

const Overlay = styled(BaseOverlay)``
const Menu = styled(BaseMenu)`
  border-radius: ${props => props.theme.sizes.radius.md};
  box-shadow: ${props => `0 0 0 1px rgba(0, 0, 0, 0.05), ${props.theme.shadow.lg}`};
`

export { Menu, Overlay }
