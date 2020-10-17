import styled from 'styled-components'
import {
  Field as BaseField,
  Input as BaseInput,
  VideoUploader as BaseVideoUploader,
  TextArea as BaseTextArea,
} from '../../../../../../components'

const Wrapper = styled.div``

const Field = styled(BaseField)`
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`
const HelperText = styled.p`
  margin-top: 0.25rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.secondaryText};
`
const Input = styled(BaseInput)``
const TextArea = styled(BaseTextArea)``
const VideoUploader = styled(BaseVideoUploader)``

export { Field, HelperText, Input, TextArea, VideoUploader, Wrapper }
