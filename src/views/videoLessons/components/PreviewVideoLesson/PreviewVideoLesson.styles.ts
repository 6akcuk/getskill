import styled from 'styled-components'
import { UserAvatar } from '../../../../components'
import { Link } from 'react-router-dom'
import { Image } from 'cloudinary-react'

const Wrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
`

const PosterWrapper = styled.div`
  position: relative;
  height: 14rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  box-shadow: ${props => props.theme.shadow.lg};
  overflow: hidden;
`
const Poster = styled(Image)`
  &:hover {
    transformation: scale(1.1);
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
  color: ${props => props.theme.colors.text[900]};
`

const Author = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-decoration: none;
`
const AuthorAvatar = styled(UserAvatar)``
const AuthorName = styled.div`
  margin-left: 0.75rem;
  color: ${props => props.theme.colors.text[500]};
`

export { Author, AuthorAvatar, AuthorName, Duration, Name, Poster, PosterWrapper, Wrapper }
