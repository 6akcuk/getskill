import styled, { css } from 'styled-components'
import { StyledButtonProps } from './types'
import { Spinner } from '../Spinner'

const focusShadow = (color: string) => css`
  box-shadow: ${({ theme }) => `0 0 0 2px #fff, 0 0 0 4px ${color}, ${theme.shadow.sm}`};
`

const primary = css`
  background: ${props => props.theme.colors.primary[600]};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[700]};
  }

  &:focus {
    ${({ theme }) => focusShadow(theme.colors.primary[500])}
  }
`

const secondary = css`
  background: ${({ theme }) => theme.colors.secondary[100]};
  color: ${({ theme }) => theme.colors.secondary[700]};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary[200]};
  }

  &:focus {
    ${({ theme }) => focusShadow(theme.colors.primary[500])}
  }
`

const white = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text[700]};
  border-color: ${({ theme }) => theme.colors.border[300]};

  &:hover {
    background: ${({ theme }) => theme.colors.background[50]};
  }

  &:focus {
    ${({ theme }) => focusShadow(theme.colors.primary[500])}
  }
`

const text = css`
  background: transparent;
`

const danger = css`
  background: ${({ theme }) => theme.colors.danger[600]};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.danger[700]};
  }

  &:focus {
    ${({ theme }) => focusShadow(theme.colors.danger[500])}
  }
`

const icon = css`
  border: 0;
  background: transparent;
  padding: 0.5rem;
  box-shadow: none;

  &:hover {
    background: ${props => props.theme.colors.background[50]};
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

    case 'icon':
      return icon

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

  position: relative;
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  border-radius: ${({ theme }) => theme.sizes.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  ${look}

  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:focus {
    outline: 0;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`

const Content = styled.div<{ showSpinner?: boolean }>`
  visibility: ${props => (props.showSpinner ? 'hidden' : 'visible')};
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
