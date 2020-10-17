import styled from 'styled-components'
import { Spinner as BaseSpinner } from '../Spinner'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = styled(BaseSpinner)`
  width: 48px;
  height: 48px;
`

export { Spinner, Wrapper }
