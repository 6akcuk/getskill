import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { ServiceTag, Tag } from '../../api'
import { createEnum, Enum } from '../../utils'
import * as S from './ServiceTagsList.styles'

const ServiceTagType = createEnum({
  VIDEOLESSON: 'VIDEOLESSON',
})

type ServiceTagType = Enum<typeof ServiceTagType>

interface ServiceTagsListProps {
  serviceType: ServiceTagType
  serviceTags?: ServiceTag[]
  className?: string
}

function ServiceTagsList(props: ServiceTagsListProps) {
  const history = useHistory()
  const handleClick = useCallback(
    (e: React.MouseEvent, tag: Tag) => {
      e.stopPropagation()

      const service = props.serviceType === 'VIDEOLESSON' ? 'videolesson' : 'all'

      if (tag.type === 'SKILL') {
        history.push(`/skills/${tag.name}?service=${service}`)
      }
    },
    [history, props.serviceType],
  )

  return (
    <S.Wrapper className={props.className}>
      {props.serviceTags?.map(serviceTag => (
        <S.ServiceTag key={serviceTag.tag.id} onClick={e => handleClick(e, serviceTag.tag)}>
          {serviceTag.tag.name}
        </S.ServiceTag>
      ))}
    </S.Wrapper>
  )
}

export default ServiceTagsList
export { ServiceTagsList, ServiceTagType }
export type { ServiceTagsListProps }
