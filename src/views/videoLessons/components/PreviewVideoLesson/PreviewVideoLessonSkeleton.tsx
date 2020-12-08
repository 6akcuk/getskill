import React from 'react'
import * as S from './PreviewVideoLessonSkeleton.styles'

function PreviewVideoLessonSkeleton() {
  return (
    <S.Wrapper>
      <S.Poster />
      <S.Author>
        <S.AuthorAvatar />
        <S.AuthorName />
      </S.Author>
      <S.Title />
    </S.Wrapper>
  )
}

export default PreviewVideoLessonSkeleton
export { PreviewVideoLessonSkeleton }
