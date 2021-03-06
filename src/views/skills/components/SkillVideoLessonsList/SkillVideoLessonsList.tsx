import React from 'react'
import * as S from './SkillVideoLessonsList.styles'
import { useSkillVideoLessonsList } from '../../hooks'

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
  return (
    <S.Wrapper className={props.className}>
      <S.ListWrapper>
        <ListContainer skill={props.skill} />
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default SkillVideoLessonsList
export { SkillVideoLessonsList }
export type { SkillVideoLessonsListProps }
