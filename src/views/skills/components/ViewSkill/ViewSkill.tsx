import React from 'react'
import { useParams } from 'react-router-dom'
import { ServiceTagType } from '../../../../components'
import { useQuery } from '../../../../hooks'
import { createEnum, Enum } from '../../../../utils'
import * as S from './ViewSkill.styles'

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
