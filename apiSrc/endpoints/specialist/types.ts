import { GetSpecialistsRequest, GetSpecialistsResponse } from './getSpecialists'

enum ScoreReason {
  PUBLISH_VIDEOLESSON = 'publish_videolesson',
}

type SpecialistsRequest = GetSpecialistsRequest
type SpecialistsResponse = GetSpecialistsResponse

export { ScoreReason }
export type { SpecialistsRequest, SpecialistsResponse }
