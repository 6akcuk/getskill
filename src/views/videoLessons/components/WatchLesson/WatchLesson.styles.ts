import styled from 'styled-components'
import { Modal, Spinner, ServiceTagsList } from '../../../../components'
import { VideoLessonAuthor } from '../VideoLessonAuthor'

const Author = styled(VideoLessonAuthor)`
  margin-top: 1rem;
`
const Content = styled.div`
  padding: 1.5rem;
`
const Description = styled.div`
  margin-top: 0.25rem;
  line-height: 1.75;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text[500]};
`
const Loading = styled(Spinner)``
const SkillsList = styled(ServiceTagsList)``
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text[900]};
  line-height: 2rem;
  margin: 0;
`
const WatchModal = styled(Modal)``

export { Author, Content, Description, Loading, SkillsList, Title, WatchModal }
