import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSkillSpecialistsList } from '../../hooks'
import * as S from './SkillSpecialistsList.styles'

interface SkillSpecialistsListProps {
  skill: string
  className?: string
}

function ListContainer(props: Pick<SkillSpecialistsListProps, 'skill'>) {
  const response = useSkillSpecialistsList({
    skill: props.skill,
  })

  return <S.List {...response} />
}

function SkillSpecialistsList(props: SkillSpecialistsListProps) {
  const { t } = useTranslation('specialist')

  return (
    <S.Wrapper className={props.className}>
      <S.Title>{t('list.title')}</S.Title>
      <S.ListWrapper>
        <ListContainer skill={props.skill} />
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default SkillSpecialistsList
export { SkillSpecialistsList }
export type { SkillSpecialistsListProps }
