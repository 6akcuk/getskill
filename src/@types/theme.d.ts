import 'styled-components'

declare module 'styled-components' {
  export interface Color {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  export type TShirtSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'DEFAULT'
  export type ColorGroup = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'

  export interface DefaultTheme {
    colors: Record<ColorGroup, Color> & {
      text: Color
      border: Color
      background: Color

      white: string
      backdrop: string
    }
    sizes: {
      radius: Record<Exclude<TShirtSize, 'xs'>, string> & {
        '2xl': string
        '3xl': string
        full: string
      }
    }
    shadow: Record<Exclude<TShirtSize, 'xs'>, string> & {
      '2xl': string
      inner: string
    }
    outline: Record<Include<ColorGroup, 'primary' | 'danger'>, string>
    zIndex: {
      dropdown: number
      modal: number
      notification: number
    }
  }
}
