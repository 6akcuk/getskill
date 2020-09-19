import React, { useMemo } from 'react'
import { ButtonSpinner, StyledButton, Wrapper } from './Button.styles'
import { ButtonProps } from './types'

function Button(props: ButtonProps) {
  const { look, children, block, showSpinner, ...rest } = props

  const inverse = useMemo(() => ['primary'].includes(look), [look])

  return (
    <Wrapper block={block}>
      <StyledButton look={look} {...rest}>
        {showSpinner ? <ButtonSpinner inverse={inverse} /> : children}
      </StyledButton>
    </Wrapper>
  )
}

export default Button
