import styled from 'styled-components'
import VideoLessonsList from './VideoLessonsList'

const Wrapper = styled.div``

const Title = styled.h1`
  margin: 0 0 2rem;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25rem;
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`
const List = styled(VideoLessonsList)``

export { Title, List, ListWrapper, Wrapper }
