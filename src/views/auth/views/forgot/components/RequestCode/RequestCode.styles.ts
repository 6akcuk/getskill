import styled from 'styled-components'
import RequestCodeForm from './RequestCodeForm'

const Wrapper = styled.div`
  min-width: 24rem;
`

const Header = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: ${props => props.theme.colors.text[900]};
  margin: 0 0 1.5rem;
`

const Form = styled(RequestCodeForm)``

export { Form, Header, Wrapper }
