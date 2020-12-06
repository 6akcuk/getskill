import React, { ReactNode, useMemo } from 'react'
import * as S from './Tabs.styles'

interface Tab {
  to: string
  label: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  className?: string
}

function Tabs(props: TabsProps) {
  const tabs = useMemo(
    () =>
      props.tabs.map(tab => (
        <S.NavLink key={tab.to} to={tab.to}>
          {tab.label}
        </S.NavLink>
      )),
    [props.tabs],
  )

  return <S.Tabs className={props.className}>{tabs}</S.Tabs>
}

export default Tabs
export { Tabs }
