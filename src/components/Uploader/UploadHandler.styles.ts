import styled from 'styled-components'
import { CircularProgressbar } from 'react-circular-progressbar'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.inverseBackdrop};
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ProgressBar = styled(CircularProgressbar)`
  height: 75%;

  .CircularProgressbar-path {
    stroke: ${props => props.theme.colors.primary};
  }
  .CircularProgressbar-text {
    fill: ${props => props.theme.colors.primary};
  }
`

export { ProgressBar, Wrapper }
