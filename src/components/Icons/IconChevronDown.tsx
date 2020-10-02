import React, { forwardRef } from 'react'
import { IconProps, defaultIconProps } from './cssVarsAsProps'

const IconChevronDown = forwardRef<SVGSVGElement>((props: IconProps, ref) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  )
})

export default IconChevronDown
export { IconChevronDown }
