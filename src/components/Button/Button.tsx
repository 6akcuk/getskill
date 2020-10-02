import React, { useMemo } from 'react'
import { ButtonProps } from './types'
import * as S from './Button.styles'

function Button(props: ButtonProps) {
  const { look, children, showSpinner, ...rest } = props

  const inverse = useMemo(() => ['primary'].includes(look), [look])

  return (
    <S.StyledButton look={look} {...rest}>
      {showSpinner ? <S.ButtonSpinner inverse={inverse} /> : children}
    </S.StyledButton>
  )
}

export default Button
export { Button }
