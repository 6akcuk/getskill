import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: ${props => props.theme.zIndex.notification};
  width: 100%;
  max-width: 24rem;
`

export { Wrapper }
