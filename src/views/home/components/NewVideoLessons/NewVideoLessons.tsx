import React from 'react'
import { useVideoLessons } from '../../../../hooks'
import * as S from './NewVideoLessons.styles'

function NewVideoLessons() {
  const { data } = useVideoLessons()

  return <S.List items={data} />
}

export default NewVideoLessons
export { NewVideoLessons }
