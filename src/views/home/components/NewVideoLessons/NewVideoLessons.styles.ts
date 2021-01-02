import styled from 'styled-components'
import { VideoLessonsListWrapper } from '../../../videoLessons'

const Wrapper = styled(VideoLessonsListWrapper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
`

export { Wrapper }
