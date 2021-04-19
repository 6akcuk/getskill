import React, { useCallback } from 'react'
import { DesktopUserControls } from './DesktopUserControls'
import { MobileUserControls } from './MobileUserControls'
import { ResponsiveLayout } from '../../../../components'

function UserControls() {
  const renderDesktop = useCallback(() => <DesktopUserControls />, [])
  const renderMobile = useCallback(() => <MobileUserControls />, [])

  return <ResponsiveLayout renderDesktop={renderDesktop} renderMobile={renderMobile} />
}

export default UserControls
export { UserControls }
