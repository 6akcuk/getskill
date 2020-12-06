import React from 'react'
import { VideoLesson } from '../../../../api'
import * as S from './ListVideoLessons.styles'

interface ListVideoLessonsProps {
  items?: VideoLesson[]
}

function ListVideoLessons(props: ListVideoLessonsProps) {
  return (
    <S.Wrapper>
      {!props.items && <S.Loading />}
      {props.items &&
        props.items.map(videoLesson => <S.VideoLesson key={videoLesson.id} videoLesson={videoLesson} />)}
    </S.Wrapper>
  )
}

export default ListVideoLessons
export { ListVideoLessons }
