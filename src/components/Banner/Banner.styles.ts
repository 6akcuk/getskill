import styled from 'styled-components'
import Button from '../Button'
import { IconClose } from '../Icons'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.primary};
`
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 0px;
  flex: 1 1 0%;
`
const Icon = styled.span`
  display: flex;
  padding: 0.5rem;
  border-radius: ${props => props.theme.sizes.radius.lg};
  background: ${props => props.theme.colors.primaryAccent};
`
const Message = styled.p<{ hasIcon?: boolean }>`
  margin-left: ${props => (props.hasIcon ? '0.75rem' : '')};
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const ActionItem = styled.div`
  width: auto;
  flex-shrink: 0;

  &:not(:first-child) {
    margin-left: 0.75rem;
  }
`
const Action = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.sizes.radius.md};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  cursor: pointer;

  box-shadow: ${props => props.theme.shadow.sm};

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`
const CloseButton = styled(Button)``
const CloseIcon = styled(IconClose)`
  --size: 24px;
  color: ${props => props.theme.colors.white};
`

export { Action, ActionItem, CloseButton, CloseIcon, Content, Icon, Message, Wrapper }
