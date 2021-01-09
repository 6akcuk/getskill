import React from 'react'
import * as S from './SpecialistsFilters.styles'

interface SpecialistsFiltersProps {
  className?: string
}

function SpecialistsFilters(props: SpecialistsFiltersProps) {
  return <S.Wrapper className={props.className} />
}

export default SpecialistsFilters
export { SpecialistsFilters }
