import styled from 'styled-components'
import { darken } from 'polished'
import { Spinner } from '../../../../components'

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${props => darken(0.15, props.theme.colors.primaryText)};
  margin: 0;
`

const Wrapper = styled.div``
const Fallback = styled(Spinner)`
  width: 48px;
  height: 48px;
`

export { Fallback, Title, Wrapper }
