import React, { ReactNode } from 'react'
import * as S from './Tag.styles'

interface TagProps {
  className?: string
  onClick?: (e: React.MouseEvent) => void
  children: ReactNode
}

function Tag(props: TagProps) {
  return (
    <S.Wrapper className={props.className} onClick={props.onClick}>
      {props.children}
    </S.Wrapper>
  )
}

export default Tag
export { Tag }
