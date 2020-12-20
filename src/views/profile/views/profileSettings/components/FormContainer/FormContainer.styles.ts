import styled from 'styled-components'
import { Button as BaseButton } from '../../../../../../components'

const FormContent = styled.div`
  border-radius: ${props => props.theme.sizes.radius.md};
  box-shadow: ${props => props.theme.shadow.DEFAULT};
  overflow: hidden;
`

const Body = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.white};
`
const Footer = styled.div`
  padding: 0.75rem 1.5rem;
  text-align: right;
  background: ${props => props.theme.colors.background[50]};
`

const Heading = styled.div``
const Title = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.text[900]};
`
const Subtitle = styled.p`
  margin-top: 0.25rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text[500]};
`
const Fields = styled.div``
const Hint = styled.div`
  margin-top: 1.5rem;
`
const Button = styled(BaseButton)``

export { Body, Button, Fields, FormContent, Footer, Heading, Hint, Subtitle, Title }
