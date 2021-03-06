import React from 'react'
import * as S from './ViewSkill.styles'
import { useRouteMatch } from 'react-router-dom'

interface ViewSkillProps {
  className?: string
}
interface ViewSkillRouteParams {
  skillName: string
}

function ViewSkill(props: ViewSkillProps) {
  const { params } = useRouteMatch<ViewSkillRouteParams>()

  return (
    <S.Wrapper className={props.className}>
      <S.Title>{params.skillName}</S.Title>
      <S.SkillVideoLessonsList skill={params.skillName} />
    </S.Wrapper>
  )
}

export default ViewSkill
export { ViewSkill }
