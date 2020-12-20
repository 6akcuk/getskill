import styled from 'styled-components'
import { Modal, Spinner } from '../../../../components'

const WatchModal = styled(Modal)`
  width: calc(100vw - 10rem);
  max-width: 70rem;
`

const Loading = styled(Spinner)``

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text[900]};
  line-height: 1.5rem;
  margin: 1rem 0 0;
`
const Description = styled.div`
  margin-top: 0.25rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
`

export { Description, Loading, Title, WatchModal }
