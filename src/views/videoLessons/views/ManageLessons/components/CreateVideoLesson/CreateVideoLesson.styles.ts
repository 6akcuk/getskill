import styled from 'styled-components'
import { Modal as BaseModal, Spinner as BaseSpinner, Button } from '../../../../../../components'
import BaseVideoLessonFields from '../VideoLessonFields'

const Modal = styled(BaseModal)``
const Spinner = styled(BaseSpinner)`
  width: 48px;
  height: 48px;
`
const Form = styled.form``

const Header = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: ${props => props.theme.colors.text[700]};
  margin: 0 0 1.5rem;
`

const VideoLessonFields = styled(BaseVideoLessonFields)``
const PublishButton = styled(Button)`
  margin-top: 1.5rem;
`

export { Form, Header, Modal, PublishButton, Spinner, VideoLessonFields }
