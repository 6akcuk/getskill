import React, { Suspense } from 'react'
import * as S from './Topbar.styles'

function Topbar() {
  return (
    <S.Wrapper>
      <S.Content>
        <Suspense fallback={<S.SuspenseSpinner />}>
          <S.SearchBar />
          <S.UserControls />
        </Suspense>
      </S.Content>
    </S.Wrapper>
  )
}

export default Topbar
export { Topbar }
