import { ResourceAssetTransformations } from '../shared/types'

const userAssetTransformations: ResourceAssetTransformations = {
  avatar: {
    width: 56,
    height: 56,
    crop: 'thumb',
    gravity: 'face',
  },
  profile: {
    width: 280,
    height: 280,
    crop: 'thumb',
    gravity: 'face',
  },
}

export default userAssetTransformations
export { userAssetTransformations }
