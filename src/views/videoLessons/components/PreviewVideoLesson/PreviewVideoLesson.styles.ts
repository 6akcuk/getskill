import styled from 'styled-components'
import { ServiceTagsList } from '../../../../components'
import { VideoLessonAuthor } from '../VideoLessonAuthor'

const Wrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: ${props => props.theme.sizes.radius.md};
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.lg};

  &:hover {
    box-shadow: ${props => props.theme.shadow.xl};
  }
`

const PosterWrapper = styled.div`
  position: relative;
  max-height: 14rem;
  border-radius: ${props => `${props.theme.sizes.radius.md} ${props.theme.sizes.radius.md} 0 0`};
  overflow: hidden;
`
const Poster = styled.img`
  height: 100%;

  &:hover {
    transformation: scale(1.1);
  }
`

const ContentWrapper = styled.div`
  padding: 1.5rem;
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

const SkillsList = styled(ServiceTagsList)``
const Name = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text[900]};
`
const Description = styled.div`
  margin-top: 1rem;
  line-height: 1.75;
  color: ${props => props.theme.colors.text[500]};
`

const Author = styled(VideoLessonAuthor)`
  margin-top: 1rem;
`

export { Author, ContentWrapper, Description, Duration, Name, Poster, PosterWrapper, SkillsList, Wrapper }
