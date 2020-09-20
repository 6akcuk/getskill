import styled from 'styled-components'
import { Button as BaseButton, Divider as BaseDivider, Spinner as BaseSpinner } from '../../../../components'

const Wrapper = styled.div``

const Header = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.colors.primaryText};
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
