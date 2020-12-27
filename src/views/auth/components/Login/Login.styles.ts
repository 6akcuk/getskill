import styled from 'styled-components'
import { Button as BaseButton, Divider as BaseDivider, Spinner as BaseSpinner } from '../../../../components'

const Wrapper = styled.div``

const Header = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.colors.text[900]};
  margin: 0 0 1.5rem;
`

const Spinner = styled(BaseSpinner)`
  width: 48px;
  height: 48px;
`

const Divider = styled(BaseDivider)`
  margin-top: 1.5rem;
`

const RegisterButton = styled(BaseButton).attrs({ look: 'white' })`
  margin-top: 1.5rem;
`

export { Divider, Header, RegisterButton, Spinner, Wrapper }
