import React, { useMemo } from 'react'
import { ButtonProps } from './types'
import * as S from './Button.styles'

function Button(props: ButtonProps) {
  const { look, children, showSpinner, ...rest } = props

  const inverse = useMemo(() => ['primary'].includes(look), [look])

  return (
    <S.StyledButton look={look} {...rest}>
      {showSpinner ? <S.SpinnerWrapper><S.ButtonSpinner inverse={inverse} /></S.SpinnerWrapper> : null}
      <S.Content showSpinner={showSpinner}>
        {children}
      </S.Content>
    </S.StyledButton>
  )
}

export default Button
export { Button }
