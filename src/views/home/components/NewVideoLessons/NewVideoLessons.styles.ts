import styled from 'styled-components'
import { ListVideoLessons } from '../../../videoLessons'

const Wrapper = styled.div``
const List = styled(ListVideoLessons)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`

export { List, Wrapper }
