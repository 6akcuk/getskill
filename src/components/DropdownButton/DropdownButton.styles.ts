import styled, { css } from 'styled-components'
import BaseButton from '../Button'
import BaseDropdown from '../Dropdown'
import { IconChevronDown, IconChevronUp } from '../Icons'

const iconCss = css`
  margin-left: 0.5rem;
  margin-right: -0.125rem;
  --size: 1rem;
`

const DownIcon = styled(IconChevronDown)`
  ${iconCss}
`
const UpIcon = styled(IconChevronUp)`
  ${iconCss}
`

const Button = styled(BaseButton)``
const Dropdown = styled(BaseDropdown)``

export { Button, DownIcon, Dropdown, UpIcon }
