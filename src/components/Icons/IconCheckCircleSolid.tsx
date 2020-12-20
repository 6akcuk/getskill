import React, { forwardRef } from 'react'
import { IconProps, defaultIconProps } from './cssVarsAsProps'

const IconCheckCircleSolid = forwardRef<SVGSVGElement>((props: IconProps, ref) => {
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
        // eslint-disable-next-line max-len
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default IconCheckCircleSolid
export { IconCheckCircleSolid }
