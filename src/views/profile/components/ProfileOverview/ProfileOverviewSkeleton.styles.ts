import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const Wrapper = styled.div``
const Avatar = styled(Skeleton).attrs({ width: '16.75rem', height: '16.75rem', circle: true })``
const Name = styled(Skeleton).attrs({ width: '16.75rem', height: '1.5rem' })`
  margin-top: 1rem;
`
const About = styled(Skeleton).attrs({ width: '16.75rem', height: '1rem' })`
  margin-top: 1rem;
`

export { About, Avatar, Name, Wrapper }
