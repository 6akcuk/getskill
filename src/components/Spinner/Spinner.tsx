import React from 'react'
import * as S from './Spinner.styles'

interface SpinnerProps {
  className?: string
  inverse?: boolean
}

function Spinner(props: SpinnerProps) {
  return (
    <S.Wrapper>
      <S.Ring className={props.className}>
        <S.First inverse={props.inverse} />
        <S.Second inverse={props.inverse} />
        <S.Third inverse={props.inverse} />
        <S.Forth inverse={props.inverse} />
      </S.Ring>
    </S.Wrapper>
  )
}

export default Spinner
export { Spinner }
