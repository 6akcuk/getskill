import React, { useCallback } from 'react'
import { Specialist, userAssetTransformations } from '../../../../api'
import { useHistory } from 'react-router-dom'
import * as S from './PreviewSpecialist.styles'
import { Transformation } from 'cloudinary-react'

interface PreviewSpecialistProps {
  specialist: Specialist
  className?: string
}

function PreviewSpecialist(props: PreviewSpecialistProps) {
  const history = useHistory()
  const handleClick = useCallback(() => {
    history.push(`/user/${props.specialist.userId}`)
  }, [history, props.specialist])

  return (
    <S.Wrapper className={props.className} onClick={handleClick}>
      <S.ContentWrapper>
        <S.Avatar {...props.specialist.user.profile.avatar}>
          <Transformation {...userAssetTransformations.profile} />
        </S.Avatar>
        <S.Name>{props.specialist.user.profile.publicName}</S.Name>
        <S.SkillsList>
          {props.specialist.tags?.map(serviceTag => (
            <S.Skill>{serviceTag.tag.name}</S.Skill>
          ))}
        </S.SkillsList>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default PreviewSpecialist
export { PreviewSpecialist }
