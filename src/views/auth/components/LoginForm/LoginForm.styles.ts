import styled from 'styled-components'
import { Button as BaseButton, Field as BaseField } from '../../../../components'

const Form = styled.form``

const Field = styled(BaseField)`
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`

const Buttons = styled.div`
  display: flex;
  margin-top: 1.5rem;
`

const SignInButton = styled(BaseButton)`
  flex: 1 1 0%;
`
const ForgotPasswordLink = styled(BaseButton)`
  margin-left: 0.75rem;
  flex-shrink: 0;
`

export { Buttons, Field, ForgotPasswordLink, Form, SignInButton }
