import styled from 'styled-components'
import { Button as BaseButton, Field as BaseField } from '../../../../components'

const Wrapper = styled.div``

const Header = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.colors.primaryText};
`

const Form = styled.form``

const Field = styled(BaseField)`
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`

const SignInButton = styled(BaseButton)`
  margin-top: 1.5rem;
`

export { Field, Form, Header, SignInButton, Wrapper }
