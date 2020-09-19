import styled, { css } from 'styled-components'
import { UserAvatarStyleProps } from './types'

const size = (props: UserAvatarStyleProps) => {
  switch (props.size) {
    case 'xs':
      return css`
        width: 1.5rem;
        height: 1.5rem;
        font-size: 0.75rem;
      `

    case 'sm':
    default:
      return css`
        width: 2rem;
        height: 2rem;
        font-size: 0.875rem;
      `
  }
}

const Wrapper = styled.span<UserAvatarStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background: ${props => props.theme.colors.secondaryText};
  ${size}
`

const InitialsPlaceholder = styled.span`
  font-weight: 500;
  line-height: 1;
  color: ${props => props.theme.colors.white};
`

export { InitialsPlaceholder, Wrapper }