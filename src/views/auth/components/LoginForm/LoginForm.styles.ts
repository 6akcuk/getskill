import styled from 'styled-components'
import { Button as BaseButton, Field as BaseField } from '../../../../components'

const Form = styled.form``

const Field = styled(BaseField)`
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`

const SignInButton = styled(BaseButton)`
  margin-top: 1.5rem;
`

export { Field, Form, SignInButton }
