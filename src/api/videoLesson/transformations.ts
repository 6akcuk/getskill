import { ResourceAssetTransformations } from '../shared/types'

const videoLessonAssetTransformations: ResourceAssetTransformations = {
  stream: {
    streaming_profile: 'hd_lean',
  },
  format: {
    format: 'm3u8',
  },
}

const videoLessonPosterTransformations: ResourceAssetTransformations = {
  poster: {
    width: 320,
    height: 180,
    crop: 'thumb',
  },
}

export default videoLessonAssetTransformations
export { videoLessonAssetTransformations, videoLessonPosterTransformations }
