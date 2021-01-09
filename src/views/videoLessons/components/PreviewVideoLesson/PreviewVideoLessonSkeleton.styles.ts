import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const Wrapper = styled.div``
const Poster = styled(Skeleton).attrs({ width: '100%', height: '14rem' })``
const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
const AuthorAvatar = styled(Skeleton).attrs({ width: '2rem', height: '2rem', circle: true })``
const AuthorName = styled(Skeleton).attrs({ width: '8rem', height: '1rem' })`
  margin-left: 0.75rem;
`
const Title = styled(Skeleton).attrs({ width: '100%', height: '2rem' })`
  margin-top: 1.5rem;
  margin-bottom: 1.375rem;
`
const Description = styled(Skeleton).attrs({ width: '100%' })`
  margin-bottom: 0.875rem;
`

export { Author, AuthorAvatar, AuthorName, Description, Poster, Title, Wrapper }
