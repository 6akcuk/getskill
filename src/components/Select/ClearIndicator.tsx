import React from 'react'
import { IndicatorProps, components } from 'react-select'
import { ClearIndicatorIcon } from './selectStyles'

function ClearIndicator(props: IndicatorProps<any>) {
  const hasValue = Boolean(props.selectProps.value?.value)

  return (
    <components.ClearIndicator {...props}>
      {hasValue ? <ClearIndicatorIcon /> : <></>}
    </components.ClearIndicator>
  )
}

export default ClearIndicator
export { ClearIndicator }
