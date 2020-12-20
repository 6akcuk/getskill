import styled from 'styled-components'
import { Modal as BaseModal, Spinner as BaseSpinner } from '../../../../components'
import BaseRegisterForm from '../RegisterForm'

const Modal = styled(BaseModal)`
  width: 100%;
  max-width: 24rem;
`
const Spinner = styled(BaseSpinner)`
  width: 48px;
  height: 48px;
`
const RegisterForm = styled(BaseRegisterForm)``

const Header = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: ${props => props.theme.colors.text[900]};
`

export { Header, Modal, RegisterForm, Spinner }
