import styled from 'styled-components'
import BaseDropzone from './Dropzone'
import { IconPlus, IconFilm } from '../Icons'
import BaseUploadHandler from './UploadHandler'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1.25rem 1.5rem 1.5rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  border: 2px dashed ${props => props.theme.colors.border};
`

const Content = styled.div`
  text-align: center;
`

const FileInfo = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.secondaryText};
`

const Browse = styled.span`
  margin-right: 0.25rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`

const PlusWrapper = styled.div`
  position: absolute;
  top: -0.125rem;
  right: -0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  background: ${props => props.theme.colors.white};
`
const PlusIcon = styled(IconPlus)`
  --size: 1.5rem;
`
const FilmIcon = styled(IconFilm)`
  --size: 3rem;
`
const UploadIcon = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: auto;
  color: ${props => props.theme.colors.secondaryText};
`
const UploadWrapper = styled.div``
const Dropzone = styled(BaseDropzone)``
const Title = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.secondaryAccentText};
`

const UploadHandler = styled(BaseUploadHandler)``

export {
  Browse,
  Content,
  Dropzone,
  FileInfo,
  FilmIcon,
  PlusIcon,
  PlusWrapper,
  Title,
  UploadIcon,
  UploadHandler,
  UploadWrapper,
  Wrapper,
}
