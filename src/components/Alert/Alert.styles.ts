import styled from 'styled-components'
import { AlertLook } from './Alert'
import { IconCheckCircleSolid } from '../Icons'

const Wrapper = styled.div<{ look: AlertLook }>`
  display: flex;
  padding: 1rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  background: ${props => props.theme.colors[props.look][50]};
`
const Icon = styled.div`
  flex-shrink: 0;
`
const Content = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
  margin-left: 0.75rem;
`
const Heading = styled.p<{ look: AlertLook }>`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${props => props.theme.colors[props.look][800]};
`

const SuccessIcon = styled(IconCheckCircleSolid)`
  --size: 1.25rem;
  color: ${props => props.theme.colors.success[400]};
`

export { Content, Heading, Icon, SuccessIcon, Wrapper }
