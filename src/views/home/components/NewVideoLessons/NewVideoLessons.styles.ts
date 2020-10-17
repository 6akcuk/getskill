import styled from 'styled-components'
import { Spinner } from '../../../../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`
const Loading = styled(Spinner)`
  width: 40px;
  height: 40px;
`

const VideoLesson = styled.div`
  width: 20rem;
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`

export { Loading, VideoLesson, Wrapper }
