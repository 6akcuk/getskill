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
      return css`
        width: 2rem;
        height: 2rem;
        font-size: 0.875rem;
      `

    case 'md':
      return css`
        width: 2.5rem;
        height: 2.5rem;
      `

    case 'lg':
      return css`
        width: 3rem;
        height: 3rem;
        font-size: 1.125rem;
      `

    case 'xl':
      return css`
        width: 3.5rem;
        height: 3.5rem;
        font-size: 1.25rem;
      `

    default:
      return css`
        width: ${props.size};
        height: ${props.size};
        font-size: 1.25rem;
      `
  }
}

const Wrapper = styled.span<UserAvatarStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background: ${props => props.theme.colors.background[500]};
  overflow: hidden;
  ${size}

  & img {
    width: 100%;
  }
`

const InitialsPlaceholder = styled.span`
  font-weight: 500;
  line-height: 1;
  color: ${props => props.theme.colors.white};
`

export { InitialsPlaceholder, Wrapper }
