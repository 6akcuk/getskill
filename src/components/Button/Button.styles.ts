import styled, { css } from 'styled-components'
import { StyledButtonProps } from './types'
import { lighten, darken } from 'polished'
import { Spinner } from '../Spinner'

const primary = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => lighten(0.04, theme.colors.primary)};
  }

  &:focus {
    border-color: ${({ theme }) => darken(0.04, theme.colors.primary)};
    box-shadow: ${({ theme }) => theme.shadow.outline.primary};
  }

  &:active {
    background: ${({ theme }) => darken(0.04, theme.colors.primary)};
  }
`

const secondary = css`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => lighten(0.02, theme.colors.secondary)};
  }

  &:focus {
    border-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
    box-shadow: ${({ theme }) => theme.shadow.outline.primary};
  }

  &:active {
    background: ${({ theme }) => darken(0.04, theme.colors.secondary)};
  }
`

const white = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryText};
  border-color: ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadow.outline.secondary};
  }

  &:active {
    background: ${({ theme }) => darken(0.04, theme.colors.white)};
    color: ${({ theme }) => theme.colors.primaryText};
  }
`

const text = css`
  background: transparent;
`

const danger = css`
  background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => lighten(0.04, theme.colors.danger)};
  }

  &:focus {
    border-color: ${({ theme }) => darken(0.04, theme.colors.danger)};
    box-shadow: ${({ theme }) => theme.shadow.outline.danger};
  }

  &:active {
    background: ${({ theme }) => darken(0.04, theme.colors.danger)};
  }
`

const look = (props: StyledButtonProps) => {
  switch (props.look) {
    case 'secondary':
      return secondary

    case 'white':
      return white

    case 'text':
      return text

    case 'danger':
      return danger

    case 'primary':
    default:
      return primary
  }
}

const StyledButton = styled.button<StyledButtonProps & { block?: boolean }>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.sizes.radius.md};
  border: 1px solid transparent;
  ${look}

  position: relative;
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  border-radius: ${({ theme }) => theme.sizes.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:focus {
    outline: 0;
  }
`

const Content = styled.div<{ showSpinner?: boolean }>`
  visibility: ${props => props.showSpinner ? 'hidden' : 'visible'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const ButtonSpinner = styled(Spinner)`
  width: 36px;
  height: 36px;
`

export { ButtonSpinner, Content, SpinnerWrapper, StyledButton }
