import React, { forwardRef } from 'react'
import { IconProps, defaultIconProps } from './cssVarsAsProps'

const IconLockClosedSolid = forwardRef<SVGSVGElement>((props: IconProps, ref) => {
  const { className, size } = { ...defaultIconProps, ...props }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="none"
      className={className}
      width={size}
      height={size}
      ref={ref}>
      <path
        fillRule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default IconLockClosedSolid
export { IconLockClosedSolid }
