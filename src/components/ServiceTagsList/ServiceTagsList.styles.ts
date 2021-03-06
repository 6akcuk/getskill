import styled from 'styled-components'
import Tag from '../Tag'

const ServiceTag = styled(Tag)`
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.primary[200]};
  }
`
const Wrapper = styled.div`
  margin-top: 0.75rem;
  line-height: 2rem;

  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`

export { ServiceTag, Wrapper }
