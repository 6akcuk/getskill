import React from 'react'
import * as S from './Specialists.styles'

interface SpecialistsProps {
  className?: string
}

function Specialists(props: SpecialistsProps) {
  return (
    <S.Wrapper className={props.className}>
      <S.Filters />
      <S.List />
    </S.Wrapper>
  )
}

export default Specialists
export { Specialists }
