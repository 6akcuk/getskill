import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      primaryText: string
      secondaryText: string
      danger: string
      backdrop: string
      border: string
      white: string
    }
    sizes: {
      radius: {
        md: string
        lg: string
      }
    }
    shadow: {
      sm: string
      xl: string
      outline: {
        primary: string
        secondary: string
      }
    }
    zIndex: {
      modal: number
    }
  }
}
