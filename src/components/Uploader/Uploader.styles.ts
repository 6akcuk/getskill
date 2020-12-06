import styled from 'styled-components'
import BaseDropzone from './Dropzone'
import BaseUploadHandler from './UploadHandler'
import BaseSpinner from '../Spinner'

const UploadWrapper = styled.div``
const Dropzone = styled(BaseDropzone)`
  position: relative;
`
const UploadHandler = styled(BaseUploadHandler)``
const Wrapper = styled.div``

const Awaiting = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  z-index: 1;
`
const Spinner = styled(BaseSpinner)`
  position: absolute;
  top: calc(50% - 18px);
  left: calc(50% - 18px);
  width: 36px;
  height: 36px;
`

export { Awaiting, Dropzone, Spinner, UploadHandler, UploadWrapper, Wrapper }
