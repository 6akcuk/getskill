import styled from 'styled-components'
import {
  Button as BaseButton,
  Field as BaseField,
  Input as BaseInput,
  TextArea as BaseTextArea,
  UserAvatar as BaseUserAvatar,
} from '../../../../../../components'
import BaseAvatarUploader from './AvatarUploader'
import BaseDeletableAvatar from './DeletableAvatar'
import FormContainer from '../FormContainer'

const DeletableAvatar = styled(BaseDeletableAvatar)``
const Form = styled.form``
const FormContent = styled(FormContainer)``
const Field = styled(BaseField)`
  margin-top: 1.5rem;
`
const Input = styled(BaseInput)``
const TextArea = styled(BaseTextArea)``
const UserAvatar = styled(BaseUserAvatar)``
const UserAvatarWrapper = styled.div`
  display: flex;
`
const AvatarUploader = styled(BaseAvatarUploader)`
  margin-left: 1.25rem;
`
const Button = styled(BaseButton)``

export {
  AvatarUploader,
  Button,
  DeletableAvatar,
  Field,
  Form,
  FormContent,
  Input,
  TextArea,
  UserAvatar,
  UserAvatarWrapper,
}
