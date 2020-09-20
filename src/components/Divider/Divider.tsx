import React, { ReactNode } from 'react'
import * as S from './Divider.styles'

interface DividerProps {
  className?: string
  text?: ReactNode
}

function Divider(props: DividerProps) {
  return (
    <S.Wrapper className={props.className}>
      <S.LineWrapper>
        <S.Line />
      </S.LineWrapper>
      {props.text && (
        <S.TextWrapper>
          <S.Text>{props.text}</S.Text>
        </S.TextWrapper>
      )}
    </S.Wrapper>
  )
}

export default Divider
export { Divider }
export type { DividerProps }
