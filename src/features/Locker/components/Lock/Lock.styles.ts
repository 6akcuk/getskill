import styled from 'styled-components'
import { Button } from '../../../../components'
import IconLockClosed from '../../../../components/Icons/IconLockClosed'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const LockIcon = styled(IconLockClosed)`
  --size: 3rem;
  color: ${props => props.theme.colors.text[500]};
`
const Heading = styled.h3`
  margin: 1.25rem 0 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.text[900]};
`
const Hint = styled.div`
  margin: 0.5rem 0 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  color: ${props => props.theme.colors.text[500]};
`
const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 0.75rem;
`
const Action = styled(Button).attrs({ look: 'primary' })``
const Close = styled(Button).attrs({ look: 'white' })``

export { Action, Actions, Heading, Hint, Close, LockIcon, Wrapper }
