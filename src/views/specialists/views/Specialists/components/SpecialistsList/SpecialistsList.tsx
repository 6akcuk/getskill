import React from 'react'
import { useTranslation } from 'react-i18next'
import { SpecialistsListWrapper, SpecialistsList as List } from '../../../../components'
import { useSpecialistsList } from '../../hooks'
import * as S from './SpecialistsList.styles'

function ListContainer() {
  const response = useSpecialistsList()

  return <List {...response} />
}

function SpecialistsList() {
  const { t } = useTranslation('specialist')

  return (
    <S.Wrapper>
      <S.Title>{t('list.title')}</S.Title>
      <SpecialistsListWrapper>
        <ListContainer />
      </SpecialistsListWrapper>
    </S.Wrapper>
  )
}

export default SpecialistsList
export { SpecialistsList }
