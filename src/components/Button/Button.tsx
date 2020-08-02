import React from 'react'
import { StyledButton, Wrapper } from './Button.styles'
import { ButtonProps } from './types'

function Button(props: ButtonProps) {
  const { look, children, block, ...rest } = props

  return (
    <Wrapper block={block}>
      <StyledButton look={look} {...rest}>
        {children}
      </StyledButton>
    </Wrapper>
  )
}

export default Button
