import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem 0.75rem;
  border-radius: ${props => props.theme.sizes.radius.full};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  background: ${props => props.theme.colors.primary[100]};
  color: ${props => props.theme.colors.primary[800]};
`

export { Wrapper }
