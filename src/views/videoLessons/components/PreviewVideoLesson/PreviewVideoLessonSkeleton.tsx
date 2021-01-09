import React from 'react'
import * as S from './PreviewVideoLessonSkeleton.styles'

function PreviewVideoLessonSkeleton() {
  return (
    <S.Wrapper>
      <S.Poster />
      <S.Title />
      <S.Description count={3} />
      <S.Author>
        <S.AuthorAvatar />
        <S.AuthorName />
      </S.Author>
    </S.Wrapper>
  )
}

export default PreviewVideoLessonSkeleton
export { PreviewVideoLessonSkeleton }
