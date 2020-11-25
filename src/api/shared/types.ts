interface Asset {
  publicId: string
  version: string
}

interface AssetTransformation {
  width: number
  height: number
  crop: 'fill' | 'crop' | 'thumb'
  gravity?: 'face'
}

interface ResourceAssetTransformations {
  [asset: string]: AssetTransformation
}

export type { Asset, AssetTransformation, ResourceAssetTransformations }
