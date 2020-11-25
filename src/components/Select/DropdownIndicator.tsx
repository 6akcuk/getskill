import React from 'react'
import { IndicatorProps, components } from 'react-select'
import { SelectorIcon } from './selectStyles'

function DropdownIndicator(props: IndicatorProps<any>) {
  return (
    <components.DropdownIndicator {...props}>
      <SelectorIcon />
    </components.DropdownIndicator>
  )
}

export default DropdownIndicator
export { DropdownIndicator }
