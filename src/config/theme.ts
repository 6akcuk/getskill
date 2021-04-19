import { DefaultTheme } from 'styled-components'
import colors from './colors'

export const theme: DefaultTheme = {
  colors: {
    primary: colors.indigo,
    secondary: colors.indigo,
    text: colors.gray,

    success: colors.green,
    warning: colors.orange,
    danger: colors.red,
    info: colors.blue,

    border: colors.gray,
    background: colors.gray,
    backdrop: colors.gray[900],
    white: '#fff',
  },
  sizes: {
    radius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  outline: {
    primary: colors.indigo[500],
    danger: colors.red[500],
  },
  zIndex: {
    dropdown: 1002,
    modal: 1000,
    notification: 1001,
  },
}
