import styled from 'styled-components'
import { FormContainer } from '../../../../components'
import { Alert, Field as BaseField, Input as BaseInput } from '../../../../../../../../components'
import SendCodeButton from './SendCodeButton'

const Form = styled.form``
const FormContent = styled(FormContainer)``

const Field = styled(BaseField)`
  margin-top: 1.5rem;
  font-size: 0.875rem;
`
const Input = styled(BaseInput)``
const SendButton = styled(SendCodeButton)``
const Hint = styled(Alert)``

export { SendButton, Field, Form, FormContent, Hint, Input }
