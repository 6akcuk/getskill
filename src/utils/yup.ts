import * as yup from 'yup'

yup.setLocale({
  mixed: {
    default: 'mixed.default',
    oneOf: 'mixed.one_of',
    required: 'mixed.required',
  },
  number: {
    integer: 'number.integer',
    max: ({ max }) => ({ key: 'number.max', values: { max } }),
    min: ({ min }) => ({ key: 'number.min', values: { min } }),
    lessThan: ({ less }) => ({ key: 'number.less_than', values: { value: less } }),
    moreThan: ({ more }) => ({ key: 'number.greater_than', values: { value: more } }),
    positive: 'number.positive',
  },
  string: {
    email: 'string.email',
  },
})
