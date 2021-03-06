import React, { useMemo, useCallback, ComponentType } from 'react'
import ReactSelect, { NamedProps, OptionTypeBase, ValueType } from 'react-select'
import ClearIndicator from './ClearIndicator'
import DropdownIndicator from './DropdownIndicator'
import { selectStyles } from './selectStyles'
import { keyBy } from 'lodash'

interface OptionType extends OptionTypeBase {
  label: string
  value: string
}
type Props = NamedProps<OptionType>
interface SelectProps extends Omit<Props, 'onChange' | 'value'> {
  options?: OptionType[]
  onChange: (option?: OptionType | null) => void
  value: string | OptionType

  __Component?: ComponentType<Props>
}

function Select(props: SelectProps) {
  const portalTarget = document.getElementById('dropdown')
  const { onChange } = props

  const handleChange = useCallback(
    (value: ValueType<OptionType>) => {
      onChange(value as OptionType)
    },
    [onChange],
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
  const SelectComponent = props.__Component || ReactSelect

  return (
    <SelectComponent
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
