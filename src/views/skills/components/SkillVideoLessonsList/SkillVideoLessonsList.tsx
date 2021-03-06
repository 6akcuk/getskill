import React from 'react'
import * as S from './SkillVideoLessonsList.styles'
import { useSkillVideoLessonsList } from '../../hooks'
import { useTranslation } from 'react-i18next'

interface SkillVideoLessonsListProps {
  skill: string
  className?: string
}

function ListContainer(props: Pick<SkillVideoLessonsListProps, 'skill'>) {
  const response = useSkillVideoLessonsList({
    skill: props.skill,
  })

  return <S.List {...response} />
}

function SkillVideoLessonsList(props: SkillVideoLessonsListProps) {
  const { t } = useTranslation('videolesson')

  return (
    <S.Wrapper className={props.className}>
      <S.Title>{t('list.title')}</S.Title>
      <S.ListWrapper>
        <ListContainer skill={props.skill} />
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default SkillVideoLessonsList
export { SkillVideoLessonsList }
export type { SkillVideoLessonsListProps }
