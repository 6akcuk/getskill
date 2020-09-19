import { ReactElement } from 'react'
import { useResponsive, configResponsive } from 'ahooks'

interface ResponsiveLayoutProps {
  renderDesktop: () => ReactElement | null
  renderMobile: () => ReactElement | null
}

configResponsive({
  mobile: 0,
  desktop: 768,
})

function ResponsiveLayout(props: ResponsiveLayoutProps) {
  const responsive = useResponsive()

  if (responsive.desktop) {
    return props.renderDesktop()
  }

  return props.renderMobile()
}

export default ResponsiveLayout
export { ResponsiveLayout }
