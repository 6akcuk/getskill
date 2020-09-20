import styled, { css } from 'styled-components'
import { OverlayPosition } from './Overlay'

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  text-align: left;
`

const OverlayWrapper = styled.div<{ isVisible: boolean; position: OverlayPosition }>`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  ${props => {
    switch (props.position) {
      case OverlayPosition.TOP_RIGHT:
      default:
        return css`
          right: 0;
        `
    }
  }}
  margin-top: 0.5rem;
  border-radius: ${props => props.theme.sizes.radius.md};
  box-shadow: ${props => props.theme.shadow.lg};
  width: 14rem;
`

export { OverlayWrapper, Wrapper }
