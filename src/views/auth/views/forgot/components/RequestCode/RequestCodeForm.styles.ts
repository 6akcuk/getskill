import styled from 'styled-components'
import { Button, Field, PhoneInput as BasePhoneInput } from '../../../../../../components'

const Form = styled.form``
const FormField = styled(Field)`
  margin-bottom: 1.25rem;
`
const PhoneInput = styled(BasePhoneInput)``
const SendButton = styled(Button)``

export { Form, FormField, PhoneInput, SendButton }
