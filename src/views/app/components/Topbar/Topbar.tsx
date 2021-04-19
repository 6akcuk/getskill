import React, { useCallback } from 'react'
import { ResponsiveLayout } from '../../../../components'
import DesktopTopbar from './DesktopTopbar'
import MobileTopbar from './MobileTopbar'

function Topbar() {
  const renderDesktop = useCallback(() => <DesktopTopbar />, [])
  const renderMobile = useCallback(() => <MobileTopbar />, [])

  return <ResponsiveLayout renderDesktop={renderDesktop} renderMobile={renderMobile} />
}

export default Topbar
export { Topbar }
