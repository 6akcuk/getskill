import styled from 'styled-components'
import { IconClose, IconCloseCircle, Button } from '../../../../../../components'

const Wrapper = styled.div`
  max-width: 24rem;
  width: 100%;
  border-radius: ${props => props.theme.sizes.radius.lg};
  box-shadow: ${props => props.theme.shadow.lg};
  background: ${props => props.theme.colors.white};

  &:not(:first-child) {
    margin-top: 1.5rem;
  }
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  box-shadow: ${props => props.theme.shadow.xs};
  border-radius: ${props => props.theme.sizes.radius.lg};
  overflow: hidden;
`

const IconSection = styled.div`
  flex-shrink: 0;
`

const TextSection = styled.div`
  flex: 1 1 0%;
  width: 0;
  margin-left: 0.75rem;
  padding-top: 0.125rem;
`

const CloseSection = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-left: 1rem;
`

const CloseIcon = styled(IconClose)`
  --size: 1.25rem;
`

const CloseButton = styled(Button)`
  padding: 0;
  box-shadow: none;
  color: ${props => props.theme.colors.secondaryText};
  opacity: 0.7;

  &:focus {
    opacity: 1;
  }
`

const ErrorIcon = styled(IconCloseCircle)`
  color: ${props => props.theme.colors.danger};
  --size: 1.5rem;
`

const Title = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${props => props.theme.colors.primaryText};

  & + & {
    margin-top: 0.25rem;
  }
`

const Text = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${props => props.theme.colors.secondaryText};
`

export {
  CloseButton,
  CloseIcon,
  CloseSection,
  Container,
  ErrorIcon,
  IconSection,
  Text,
  TextSection,
  Title,
  Wrapper,
}
