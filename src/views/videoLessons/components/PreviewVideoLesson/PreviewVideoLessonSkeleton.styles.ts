import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const Wrapper = styled.div``
const Poster = styled(Skeleton).attrs({ width: '22.5rem', height: '11.81rem' })``
const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
const AuthorAvatar = styled(Skeleton).attrs({ width: '1.5rem', height: '1.5rem', circle: true })``
const AuthorName = styled(Skeleton).attrs({ width: '7.5rem', height: '1rem' })`
  margin-left: 0.75rem;
`
const Title = styled(Skeleton).attrs({ width: '20rem' })`
  margin-top: 1rem;
`

export { Author, AuthorAvatar, AuthorName, Poster, Title, Wrapper }
