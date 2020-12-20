import styled from 'styled-components'
import { Spinner } from '../../../../components'

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.text[900]};
  margin: 0;
  margin-bottom: 2rem;
`

const Wrapper = styled.div``
const Fallback = styled(Spinner)`
  width: 48px;
  height: 48px;
`

export { Fallback, Title, Wrapper }
