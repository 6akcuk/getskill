import React, { ReactNode, memo, useRef, useMemo, useState, useLayoutEffect } from 'react'
import { theme } from '../../config/theme'

interface IconProps {
  className?: string
  children?: ReactNode
  size?: number | string
  color?: string
  secondColor?: string
}

const defaultIconProps: Required<Omit<IconProps, 'className' | 'children'>> = {
  size: 32,
  color: theme.colors.text[700],
  secondColor: theme.colors.danger[500],
}

function cssVarsAsProps<P extends IconProps>(IconComponent: any) {
  return memo((props: P) => {
    const ref = useRef<SVGSVGElement>(null)
    const [propsFromCssVars, setPropsFromCssVars] = useState<IconProps>(props)
    const mergedProps = useMemo<P>(() => ({ ...propsFromCssVars, ...props }), [props, propsFromCssVars])

    useLayoutEffect(() => {
      if (!ref.current) {
        return
      }

      const styles = window.getComputedStyle(ref.current)
      const sizeCssVar = styles.getPropertyValue('--size')

      const mergedProps = {
        color: `var(--color, ${defaultIconProps.color})`,
        secondColor: `var(--secondColor, ${defaultIconProps.secondColor})`,
        size: sizeCssVar,
      }

      setPropsFromCssVars(mergedProps)
    }, [ref])

    return <IconComponent ref={ref} {...mergedProps} />
  })
}

export default cssVarsAsProps
export { defaultIconProps, cssVarsAsProps }
export type { IconProps }
