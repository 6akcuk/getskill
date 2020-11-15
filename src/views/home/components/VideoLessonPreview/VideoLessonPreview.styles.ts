import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
`

const Poster = styled.div<{ src: string }>`
  position: relative;
  width: 20rem;
  height: 11.29rem;
  background-image: url(${props => props.src});
  background-size: cover;
  border-radius: ${props => props.theme.sizes.radius.md};
  box-shadow: ${props => props.theme.shadow.lg};

  &:hover {
  }
`

const Duration = styled.div`
  position: absolute;
  padding: 0.25rem;
  bottom: 0.5rem;
  right: 0.5rem;
  background: ${props => props.theme.colors.backdrop};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.sizes.radius.md};
  font-size: 0.875rem;
`

const Name = styled.h4`
  margin: 1rem 0 0;
  font-weight: 400;
  text-decoration: none;
  color: ${props => props.theme.colors.primaryText};
`

export { Duration, Name, Poster, Wrapper }
