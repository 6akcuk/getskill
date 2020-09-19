import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './SearchBar.styles'

interface SearchBarProps {
  className?: string
}

function SearchBar(props: SearchBarProps) {
  const { t } = useTranslation('app')

  return (
    <S.Wrapper className={props.className}>
      <S.SearchWrapper>
        <S.SearchIconWrapper>
          <S.SearchIcon />
        </S.SearchIconWrapper>
        <S.SearchInput placeholder={t('topbar.search_placeholder')} />
      </S.SearchWrapper>
    </S.Wrapper>
  )
}

export default SearchBar
export { SearchBar }
export type { SearchBarProps }
