import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      primaryAccentText: string
      primaryText: string
      secondaryAccentText: string
      secondaryText: string
      danger: string
      backdrop: string
      inverseBackdrop: string
      background: string
      lightBackground: string
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
      md: string
      lg: string
      xl: string
      outline: {
        primary: string
        secondary: string
        danger: string
      }
    }
    zIndex: {
      dropdown: number
      modal: number
      notification: number
    }
  }
}
