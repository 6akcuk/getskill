import { Stream } from '@cloudflare/stream-react'
import styled from 'styled-components'
import {
  Field as BaseField,
  Input as BaseInput,
  VideoUploader as BaseVideoUploader,
  TextArea as BaseTextArea,
} from '../../../../../../components'
import SkillsSearch from './SkillsSearch'

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
  color: ${props => props.theme.colors.text[500]};
`
const Input = styled(BaseInput)``
const TextArea = styled(BaseTextArea)``
const VideoUploader = styled(BaseVideoUploader)``
const VideoPlayer = styled(Stream)``
const SkillsInput = styled(SkillsSearch)``

const VideoProcessing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background: ${props => props.theme.colors.background[50]};
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text[500]};
  text-align: center;
`

export {
  Field,
  HelperText,
  Input,
  SkillsInput,
  TextArea,
  VideoPlayer,
  VideoProcessing,
  VideoUploader,
  Wrapper,
}
