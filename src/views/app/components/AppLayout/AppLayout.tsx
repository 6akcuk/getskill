import React, { ReactNode, useCallback } from 'react'
import { ResponsiveLayout } from '../../../../components'
import DesktopLayout from './DesktopLayout'
import MobileLayout from './MobileLayout'

interface AppLayoutProps {
  children: ReactNode
}

function AppLayout(props: AppLayoutProps) {
  const renderDesktop = useCallback(() => <DesktopLayout>{props.children}</DesktopLayout>, [props.children])
  const renderMobile = useCallback(() => <MobileLayout>{props.children}</MobileLayout>, [props.children])

  return <ResponsiveLayout renderDesktop={renderDesktop} renderMobile={renderMobile} />
}

export default AppLayout
export { AppLayout }
