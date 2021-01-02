import { MultiSelectProps, OptionType } from './MultiSelect'

function isStringArray(value: MultiSelectProps['value']): value is string[] {
  return Array.isArray(value) && typeof value[0] === 'string'
}

function isOptionArray(options: MultiSelectProps['options']): options is OptionType[] {
  return Array.isArray(options) && options[0] && options[0].label
}

function equalsOption(optionA: OptionType) {
  return (optionB: OptionType) => optionA.value === optionB.value
}

export { equalsOption, isOptionArray, isStringArray }
