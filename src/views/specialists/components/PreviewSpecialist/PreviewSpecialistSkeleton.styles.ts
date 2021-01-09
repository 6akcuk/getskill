import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Avatar = styled(Skeleton).attrs({ width: '12.5rem', height: '12.5rem', circle: true })``
const Name = styled(Skeleton).attrs({ width: '12.5rem', height: '1.5rem' })`
  margin-top: 1rem;
`

export { Avatar, Name, Wrapper }
