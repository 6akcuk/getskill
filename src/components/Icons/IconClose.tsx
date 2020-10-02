import React, { forwardRef } from 'react'
import { IconProps, defaultIconProps } from './cssVarsAsProps'

const IconClose = forwardRef<SVGSVGElement>((props: IconProps, ref) => {
  const { className, size } = { ...defaultIconProps, ...props }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      width={size}
      height={size}
      ref={ref}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
})

export default IconClose
export { IconClose }
