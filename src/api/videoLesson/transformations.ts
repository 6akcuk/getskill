import { ResourceAssetTransformations } from '../shared/types'

const videoLessonAssetTransformations: ResourceAssetTransformations = {
  stream: {
    streaming_profile: 'hd_lean/m3u8',
  },
  player: {
    streaming_profile: 'hd_lean',
  },
}

const videoLessonPosterTransformations: ResourceAssetTransformations = {
  poster: {
    width: 400,
    height: 224,
    crop: 'thumb',
  },
}

export default videoLessonAssetTransformations
export { videoLessonAssetTransformations, videoLessonPosterTransformations }
