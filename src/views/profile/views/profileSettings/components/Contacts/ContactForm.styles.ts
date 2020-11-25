import styled from 'styled-components'
import { Button as BaseButton, Field as BaseField, Input as BaseInput } from '../../../../../../components'
import FormContainer from '../FormContainer'
import ContactResourceSelect from './ContactResourceSelect'

const Form = styled.form``
const FormContent = styled(FormContainer)``

const Field = styled(BaseField)`
  margin-top: 1.5rem;
`
const Select = styled(ContactResourceSelect)``
const Input = styled(BaseInput)``
const Button = styled(BaseButton)`
  margin-left: 0.75rem;
`

const Flex = styled.div`
  display: flex;
`
const InputWrapper = styled.div`
  flex: 1;
`

export { Button, Field, Flex, Form, FormContent, Input, InputWrapper, Select }
