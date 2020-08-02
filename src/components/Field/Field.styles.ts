import styled from 'styled-components'

const Wrapper = styled.div``

const Label = styled.label`
  display: block;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 0.25rem;
`

const Hint = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
`

const Error = styled(Hint)`
  color: ${({ theme }) => theme.colors.danger};
`

export { Error, Label, Wrapper }
