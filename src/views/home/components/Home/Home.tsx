import React from 'react'
import { useTranslation } from 'react-i18next'
import NewVideoLessons from '../NewVideoLessons'
import * as S from './Home.styles'

function Home() {
  const { t } = useTranslation('home')

  return (
    <S.Wrapper>
      <S.Title>{t('title.new_videolessons')}</S.Title>
      <NewVideoLessons />
    </S.Wrapper>
  )
}

export default Home
export { Home }
