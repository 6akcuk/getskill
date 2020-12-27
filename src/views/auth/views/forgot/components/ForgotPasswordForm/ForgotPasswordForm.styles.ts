import styled from 'styled-components'
import {
  Button,
  Field,
  Input as BaseInput,
  PasswordInput as BasePasswordInput,
  PhoneInput as BasePhoneInput,
} from '../../../../../../components'

const Form = styled.form`
  width: 25rem;
`
const FormField = styled(Field)`
  margin-bottom: 1.25rem;
`
const Input = styled(BaseInput)``
const PasswordInput = styled(BasePasswordInput)``
const PhoneInput = styled(BasePhoneInput)``
const SendButton = styled(Button)``

export { Form, FormField, Input, PasswordInput, PhoneInput, SendButton }
