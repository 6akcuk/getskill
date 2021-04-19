import React from 'react'
import { useTranslation } from 'react-i18next'
import NewVideoLessons from '../NewVideoLessons'
import * as S from './Home.styles'
import { createStylableComponent } from '../../../../utils'

interface HomeProps {
  className?: string
}

function Home(props: HomeProps) {
  const { t } = useTranslation('home')

  return (
    <S.Wrapper className={props.className}>
      <S.Title>{t('title.new_videolessons')}</S.Title>
      <NewVideoLessons />
    </S.Wrapper>
  )
}

const StylableHome = createStylableComponent(S, Home)

export default StylableHome
export { StylableHome as Home }
export type { HomeProps }
