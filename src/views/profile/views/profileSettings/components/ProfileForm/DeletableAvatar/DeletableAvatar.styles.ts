import styled from 'styled-components'
import { IconClose, Button } from '../../../../../../../components'

const DeleteButton = styled(Button).attrs({ look: 'icon' })`
  position: absolute;
  top: 0rem;
  right: 0rem;
  border-radius: ${props => props.theme.sizes.radius.full};
  padding: 0.125rem;
  z-index: 1;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.background[500]};

  &:hover {
    background: ${props => props.theme.colors.background[600]};
  }
`
const CloseIcon = styled(IconClose)`
  --size: 12px;
`
const Wrapper = styled.div`
  position: relative;
`

export { DeleteButton, CloseIcon, Wrapper }
