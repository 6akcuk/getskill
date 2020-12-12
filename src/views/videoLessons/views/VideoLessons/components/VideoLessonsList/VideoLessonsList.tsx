import React from 'react'
import { VideoLessonsListWrapper } from '../../../../components'
import VideoLessonsListContainer from './VideoLessonsListContainer'
import * as S from './VideoLessonsList.styles'
import { useTranslation } from 'react-i18next'

function VideoLessonsList() {
  const { t } = useTranslation('videolesson')

  return (
    <S.Wrapper>
      <S.Title>{t('list.title')}</S.Title>
      <VideoLessonsListWrapper>
        <VideoLessonsListContainer />
      </VideoLessonsListWrapper>
    </S.Wrapper>
  )
}

export default VideoLessonsList
export { VideoLessonsList }
