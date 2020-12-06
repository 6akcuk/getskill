interface Asset {
  publicId: string
  version: string
}

interface AssetTransformation {
  width?: number
  height?: number
  crop?: 'fill' | 'crop' | 'thumb'
  gravity?: 'face'
  streaming_profile?: 'hd' | 'full_hd' | 'hd_lean'
  format?: 'm3u8'
}

interface ResourceAssetTransformations {
  [asset: string]: AssetTransformation
}

export type { Asset, AssetTransformation, ResourceAssetTransformations }
