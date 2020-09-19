import React, { ReactNode } from 'react'

interface MobileLayoutProps {
  children: ReactNode
}

function MobileLayout(props: MobileLayoutProps) {
  return <>{props.children}</>
}

export default MobileLayout
export { MobileLayout }
