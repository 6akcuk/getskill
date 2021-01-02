import React, { ReactNode } from 'react'
import * as S from './Tag.styles'

interface TagProps {
  children: ReactNode
}

function Tag(props: TagProps) {
  return <S.Wrapper>{props.children}</S.Wrapper>
}

export default Tag
export { Tag }
