import styled from 'styled-components'
import BaseDropzone from './Dropzone'
import BaseUploader from './Uploader'

const Wrapper = styled.div`
  display: flex;
  position: relative;
`

const UploadWrapper = styled.div``
const Dropzone = styled(BaseDropzone)``
const Uploader = styled(BaseUploader)``

export { Dropzone, Uploader, UploadWrapper, Wrapper }
