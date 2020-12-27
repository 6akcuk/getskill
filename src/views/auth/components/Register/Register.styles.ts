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
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 2.25rem;
  color: ${props => props.theme.colors.text[900]};
  margin: 0 0 1.5rem;
`

export { Header, Modal, RegisterForm, Spinner }
