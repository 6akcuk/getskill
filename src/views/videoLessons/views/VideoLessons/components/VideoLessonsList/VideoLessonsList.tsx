import React from 'react'
import { useTranslation } from 'react-i18next'
import { VideoLessonsListWrapper, VideoLessonsList as List } from '../../../../components'
import * as S from './VideoLessonsList.styles'
import useVideoLessonsList from '../../hooks/useVideoLessonsList'

function ListContainer() {
  const response = useVideoLessonsList()

  return <List {...response} />
}

function VideoLessonsList() {
  const { t } = useTranslation('videolesson')

  return (
    <S.Wrapper>
      <S.Title>{t('list.title')}</S.Title>
      <VideoLessonsListWrapper>
        <ListContainer />
      </VideoLessonsListWrapper>
    </S.Wrapper>
  )
}

export default VideoLessonsList
export { VideoLessonsList }
