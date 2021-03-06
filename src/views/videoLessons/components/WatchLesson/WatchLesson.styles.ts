import styled from 'styled-components'
import { Modal, Spinner, ServiceTagsList } from '../../../../components'

const WatchModal = styled(Modal)`
  width: calc(100vw - 10rem);
  max-width: 70rem;
`

const Loading = styled(Spinner)``

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text[900]};
  line-height: 2rem;
  margin: 1rem 0 0;
`
const Description = styled.div`
  margin-top: 0.25rem;
  line-height: 1.75;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text[500]};
`
const SkillsList = styled(ServiceTagsList)``

export { Description, Loading, SkillsList, Title, WatchModal }
