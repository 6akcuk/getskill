import { Lock } from './types'

enum Feature {
  PUBLISH_VIDEOLESSON = 'PUBLISH_VIDEOLESSON',
}

const featureLockMap: Record<Feature, Lock> = {
  [Feature.PUBLISH_VIDEOLESSON]: {
    action: 'lock',
    rules: [{ test: user => user.isPhoneVerified }],
  },
}

export { Feature, featureLockMap }
