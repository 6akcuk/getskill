import React from 'react'
import { useTranslation } from 'react-i18next'
import PreviewSpecialist, { PreviewSpecialistSkeleton } from '../PreviewSpecialist'
import { UseInfiniteEntitiesResult } from '../../../../hooks'
import { Specialist } from '../../../../api'
import * as S from './SpecialistsList.styles'

type SpecialistsListProps = UseInfiniteEntitiesResult<Specialist>

function SpecialistsList(props: SpecialistsListProps) {
  const { t } = useTranslation('app')

  return (
    <>
      {props.entities?.map(specialist => (
        <PreviewSpecialist key={specialist.id} specialist={specialist} />
      ))}
      {props.isReachedEnd && props.isValidating && <PreviewSpecialistSkeleton />}
      {!props.isReachedEnd && (
        <S.LoadMoreWrapper>
          <S.LoadMore
            look="white"
            showSpinner={props.isValidating}
            onClick={() => props.setSize(props.size + 1)}>
            {t('common.load_more')}
          </S.LoadMore>
        </S.LoadMoreWrapper>
      )}
    </>
  )
}

export default SpecialistsList
export { SpecialistsList }
