import styled from 'styled-components'
import { ErrorDisplay } from '../../../../../../components'

const Wrapper = styled.div`
  position: relative;
`

const DisplayError = styled(ErrorDisplay)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export { DisplayError, Wrapper }
