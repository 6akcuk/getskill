import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const Label = styled.label`
  display: block;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text[700]};
  margin-bottom: 0.25rem;
`

const Hint = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${props => props.theme.colors.text[500]};
`

const Error = styled(Hint)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.colors.danger[600]};
`

export { Error, Hint, Label, Wrapper }
