import styled from 'styled-components'
import {
  Button as BaseButton,
  Field as BaseField,
  Input as BaseInput,
  PasswordInput as BasePasswordInput,
  PhoneInput as BasePhoneInput,
} from '../../../../components'

const Form = styled.form``

const Field = styled(BaseField)`
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`

const Input = styled(BaseInput)``
const PhoneInput = styled(BasePhoneInput)``
const PasswordInput = styled(BasePasswordInput)``

const SignUpButton = styled(BaseButton)`
  margin-top: 1.5rem;
`

export { Field, Form, Input, PasswordInput, PhoneInput, SignUpButton }
