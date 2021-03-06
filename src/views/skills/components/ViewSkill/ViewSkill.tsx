import React from 'react'
import * as S from './ViewSkill.styles'
import { useParams, useLocation } from 'react-router-dom'
import { useQuery } from '../../../../hooks'
import { ServiceTagType } from '../../../../components'
import { createEnum, Enum } from '../../../../utils'

const ViewSkillQueryService = createEnum({
  ...ServiceTagType,
  ALL: 'all',
})

type ViewSkillQueryService = Enum<typeof ViewSkillQueryService>

interface ViewSkillProps {
  className?: string
}
interface ViewSkillQuery {
  service: ViewSkillQueryService
}
interface ViewSkillRouteParams {
  skillName: string
}

function ViewSkill(props: ViewSkillProps) {
  const params = useParams<ViewSkillRouteParams>()
  const query = useQuery<ViewSkillQuery>()

  console.log(query)

  return (
    <S.Wrapper className={props.className}>
      <S.Title>{params.skillName}</S.Title>
      {query.service !== 'videolesson' && <S.SkillSpecialistsList skill={params.skillName} />}
      <S.SkillVideoLessonsList skill={params.skillName} />
    </S.Wrapper>
  )
}

export default ViewSkill
export { ViewSkill }
