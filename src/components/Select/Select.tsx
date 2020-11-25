import React, { useMemo, useCallback } from 'react'
import ReactSelect, { Props, OptionTypeBase, ValueType } from 'react-select'
import ClearIndicator from './ClearIndicator'
import DropdownIndicator from './DropdownIndicator'
import { selectStyles } from './selectStyles'
import { keyBy } from 'lodash'

interface SelectProps extends Omit<Props, 'onChange'> {
  onChange: (option?: OptionType | null) => void
}
interface OptionType extends OptionTypeBase {
  label: string
  value: string
}

function Select(props: SelectProps) {
  const portalTarget = document.getElementById('dropdown')

  const handleChange = useCallback(
    (value: ValueType<OptionType>) => {
      props.onChange(value as OptionType)
    },
    [props.onChange],
  )

  const components = useMemo(
    () => ({
      DropdownIndicator,
      ...props.components,
      ClearIndicator,
    }),
    [props.components],
  )
  const optionsByValue = useMemo(() => keyBy(props.options, option => option.value), [props.options])
  const value = useMemo(() => (typeof props.value === 'string' ? optionsByValue[props.value] : props.value), [
    props.value,
    optionsByValue,
  ])

  return (
    <ReactSelect
      {...props}
      onChange={handleChange}
      menuPortalTarget={portalTarget}
      components={components}
      styles={props.styles || selectStyles}
      value={value}
    />
  )
}

export default Select
export { Select }
export type { OptionType, SelectProps }
