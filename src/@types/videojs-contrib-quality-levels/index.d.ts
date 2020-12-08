declare module 'videojs-contrib-quality-levels' {
  export interface Representation {
    id: string
    width?: number
    height?: number
    bitrate: number
    enabled: function
  }
}
