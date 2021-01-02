import React, { useCallback, useMemo, ComponentType } from 'react'
import ReactSelect, { Props, ValueType } from 'react-select'
import { selectStyles } from './selectStyles'
import DropdownIndicator from './DropdownIndicator'
import { isOptionArray, isStringArray } from './utils'
import { keyBy } from 'lodash'
import { OptionType, SelectProps } from './Select'

type GroupedOptionTypes = {
  options: OptionType[]
  [key: string]: any
}
type OptionsByValue<OptionType> = Record<string, OptionType>

interface MultiSelectProps extends Omit<SelectProps, 'onChange' | 'value' | 'options'> {
  onChange: (value: OptionType[] | null) => void
  options?: OptionType[] | GroupedOptionTypes[]
  value?: OptionType[] | string[]

  __Component?: ComponentType<Props>
}

function MultiSelect(props: MultiSelectProps) {
  const { onChange } = props
  const handleChange = useCallback(
    (value: ValueType<OptionType>) => {
      onChange && onChange(value as OptionType[])
    },
    [onChange],
  )

  const optionsByValue = useMemo<OptionsByValue<OptionType> | undefined>(() => {
    if (!props.options) {
      return undefined
    }

    if (isOptionArray(props.options)) {
      return keyBy(props.options, option => option.value)
    }

    return keyBy(
      props.options.flatMap(group => group.options),
      option => option.value,
    )
  }, [props.options])

  const value = useMemo(() => {
    if (isStringArray(props.value)) {
      return props.value.map(value => {
        if (!optionsByValue) {
          return {
            value,
            label: value,
          } as OptionType
        }

        return optionsByValue[value]
      })
    }

    return props.value
  }, [props.value, optionsByValue])

  const components = useMemo(
    () => ({
      DropdownIndicator,
    }),
    [],
  )
  const SelectComponent = props.__Component || ReactSelect

  return (
    <SelectComponent
      {...props}
      menuPlacement={props.menuPlacement || 'auto'}
      className={props.className}
      classNamePrefix={props.classNamePrefix || 'multiselect'}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      isMulti={true}
      styles={selectStyles}
      id={props.id}
      isSearchable={typeof props.isSearchable === 'undefined' ? false : props.isSearchable}
      isOptionDisabled={props.isOptionDisabled}
      name={props.name}
      onChange={handleChange}
      options={props.options}
      placeholder={props.placeholder}
      value={value}
      components={components}
    />
  )
}

export default MultiSelect
export { MultiSelect }
export type { GroupedOptionTypes, MultiSelectProps, OptionType }
