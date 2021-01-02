import React, { useCallback, ReactNode } from 'react'
import { Props as ReactSelectProps, FormatOptionLabelMeta } from 'react-select'
import ReactSelectAsync, { AsyncProps } from 'react-select/async'
import Select, { OptionType, SelectProps } from './Select'

interface AsyncSelectProps extends SelectProps, AsyncProps<OptionType> {
  formatOptionLabel?: (option: OptionType, labelMeta: FormatOptionLabelMeta<OptionType>) => ReactNode
  controlShouldRenderValue?: boolean
}

function AsyncSelect(props: AsyncSelectProps) {
  const { defaultOptions, loadOptions, cacheOptions, formatOptionLabel, ...otherProps } = props
  const AsyncSelectComponent = useCallback(
    (selectProps: ReactSelectProps) => (
      <ReactSelectAsync
        {...selectProps}
        value={selectProps.value as OptionType}
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

  return <Select __Component={AsyncSelectComponent} {...otherProps} />
}

export default AsyncSelect
export { AsyncSelect }
export type { AsyncSelectProps }
