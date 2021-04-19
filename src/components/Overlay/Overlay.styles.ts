import { Placement } from '@popperjs/core'
import styled, { css } from 'styled-components'
import { Popper as BasePopper } from './Popper'

const Arrow = styled.div<{ placement: Placement }>`
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  z-index: -1;

  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    background: ${props => props.theme.colors.text[700]};
    transform: rotate(45deg);
    transform-origin: center center;
    z-index: -1;
  }

  ${props => {
    switch (props.placement) {
      case 'left':
        return css`
          right: -3px;
        `

      case 'right':
        return css`
          left: -3px;
        `

      case 'top':
        return css`
          bottom: -3px;
        `

      case 'bottom':
      default:
        return css`
          top: -3px;
        `
    }
  }}
`
const Content = styled.div``
const Offset = styled.div<{ offsetX?: string; offsetY?: string }>`
  transform: translateX(${props => props.offsetX ?? '0px'}) translateY(${props => props.offsetY ?? '0px'});
`
const Popper = styled(BasePopper)`
  display: block;
  position: absolute;
  margin-top: 0.5rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  box-shadow: ${props => props.theme.shadow.lg};
  width: 14rem;
`
const Reference = styled.div``
const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  text-align: left;
`

export { Arrow, Content, Offset, Popper, Reference, Wrapper }
