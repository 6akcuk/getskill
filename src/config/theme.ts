import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#5850ec',
    secondary: '#e5edff',
    primaryText: '#374151',
    secondaryText: '#6b7280',
    danger: '#e02424',
    backdrop: 'rgba(107,114,128,0.75)', // #6b7280
    border: '#d2d6dc',
    white: '#fff',
  },
  sizes: {
    radius: {
      md: '0.375rem',
      lg: '0.5rem',
    },
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0,0,0,.05)',
    xl: '0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)',

    outline: {
      primary: '0 0 0 3px rgba(180,198,252,.45)',
      secondary: '0 0 0 3px rgba(164,202,254,.45)',
    },
  },
  zIndex: {
    modal: 1000,
  },
}
