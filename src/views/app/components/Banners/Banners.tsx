import React from 'react'
import * as S from './Banners.styles'

interface BannersProps {
  className?: string
}

function Banners(props: BannersProps) {
  return <S.Portal id="banners" className={props.className} />
}

export default Banners
export { Banners }
