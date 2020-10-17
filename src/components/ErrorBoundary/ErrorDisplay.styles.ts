import styled from 'styled-components'
import { Button } from '../Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-self: stretch;
  align-self: stretch;
`

const MessageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  padding: 0 1.5rem;
  color: ${props => props.theme.colors.primaryText};
`

const Text = styled.div`
  line-height: 1.5;
  text-align: center;
  padding: 0 1.5rem;
  color: ${props => props.theme.colors.secondaryText};
`

const RefreshButton = styled(Button)`
  margin-top: 1rem;
`

export { Wrapper, MessageContainer, Title, Text, RefreshButton }
