import styled from 'styled-components'
import { Button } from '../../../../components'

const LoadMoreWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.375rem;

  display: flex;
  justify-content: center;
`

const LoadMore = styled(Button)``

export { LoadMore, LoadMoreWrapper }
