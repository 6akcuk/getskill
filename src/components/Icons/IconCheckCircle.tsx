import React, { forwardRef } from 'react'
import { IconProps, defaultIconProps } from './cssVarsAsProps'

const IconCheckCircle = forwardRef<SVGSVGElement>((props: IconProps, ref) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
})

export default IconCheckCircle
export { IconCheckCircle }
