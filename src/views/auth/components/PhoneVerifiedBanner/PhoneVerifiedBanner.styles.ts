import styled from 'styled-components'
import { IconExclamation } from '../../../../components'

const WarningIcon = styled(IconExclamation)`
  --size: 24px;
  color: ${props => props.theme.colors.white};
`

export { WarningIcon }
