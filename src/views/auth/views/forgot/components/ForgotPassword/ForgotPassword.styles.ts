import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.text[700]};
  margin: 0 0 1.5rem;
`

export { Title }
