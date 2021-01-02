import React, { useCallback } from 'react'
import { Props as ReactSelectProps } from 'react-select'
import ReactSelectCreatable from 'react-select/async-creatable'
import { CreatableProps } from 'react-select/creatable'
import { AsyncProps } from 'react-select/async'
import MultiSelect, { OptionType, MultiSelectProps } from './MultiSelect'

type AsyncMultiSelectProps = AsyncProps<OptionType> & CreatableProps<OptionType> & MultiSelectProps

function AsyncMultiSelect(props: AsyncMultiSelectProps) {
  const { defaultOptions, loadOptions, cacheOptions, formatOptionLabel, ...otherProps } = props
  const AsyncSelectComponent = useCallback(
    (selectProps: ReactSelectProps) => (
      <ReactSelectCreatable
        {...selectProps}
        onChange={selectProps.onChange}
        defaultOptions={defaultOptions}
        loadOptions={loadOptions}
        cacheOptions={cacheOptions}
        formatOptionLabel={formatOptionLabel}
        hasValue={selectProps.hasValue}
      />
    ),
    [defaultOptions, loadOptions, cacheOptions, formatOptionLabel],
  )

  return <MultiSelect __Component={AsyncSelectComponent} {...otherProps} />
}

export default AsyncMultiSelect
export { AsyncMultiSelect }
export type { AsyncMultiSelectProps }
