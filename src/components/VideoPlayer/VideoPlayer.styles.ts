import styled from 'styled-components'
import { Stream } from '@cloudflare/stream-react'

const Wrapper = styled.div`
  position: relative;
`
const Video = styled(Stream)``

export { Video, Wrapper }
