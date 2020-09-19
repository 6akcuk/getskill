import React from 'react'
import * as S from './Topbar.styles'

function Topbar() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.SearchBar />
        <S.UserControls />
      </S.Content>
    </S.Wrapper>
  )
}

export default Topbar
export { Topbar }
