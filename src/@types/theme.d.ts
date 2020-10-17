import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      primaryText: string
      secondaryAccentText: string
      secondaryText: string
      danger: string
      backdrop: string
      background: string
      border: string
      white: string
      sidebarPrimary: string
      sidebarBackground: string
      sidebarLight: string
    }
    sizes: {
      radius: {
        md: string
        lg: string
      }
    }
    shadow: {
      xs: string
      sm: string
      lg: string
      xl: string
      outline: {
        primary: string
        secondary: string
      }
    }
    zIndex: {
      modal: number
      notification: number
    }
  }
}
