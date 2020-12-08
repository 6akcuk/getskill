type AssetTransformationStreamingProfile = 'hd/m3u8' | 'full_hd/m3u8' | 'hd_lean/m3u8' | 'hd_lean'

interface Asset {
  publicId: string
  version: string
}

interface AssetTransformation {
  width?: number
  height?: number
  crop?: 'fill' | 'crop' | 'thumb'
  gravity?: 'face'
  streaming_profile?: AssetTransformationStreamingProfile // derived versions
  format?: 'm3u8'
}

interface ResourceAssetTransformations {
  [asset: string]: AssetTransformation
}

export type { Asset, AssetTransformation, AssetTransformationStreamingProfile, ResourceAssetTransformations }
