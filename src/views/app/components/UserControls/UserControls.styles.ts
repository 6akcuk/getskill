import styled from 'styled-components'
import { Button } from '../../../../components'
import BaseUserBlock from './UserBlock'
import PublishDropdown from './PublishDropdown'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const UserControls = styled.div``
const PublishDropdownButton = styled(PublishDropdown)``
const LoginButton = styled(Button)``
const UserBlock = styled(BaseUserBlock)`
  margin-left: 0.5rem;
`

export { LoginButton, PublishDropdownButton, UserBlock, UserControls, Wrapper }
