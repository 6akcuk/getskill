import { ApiResponse, ApiRequestWithAuth } from '../types'
import { AnyDraftEntity } from './builder'

enum DraftResourceType {
  VIDEOLESSON = 'VIDEOLESSON',
}

interface DraftRequestBody {
  resourceType: DraftResourceType
}

type DraftRequest = ApiRequestWithAuth<DraftRequestBody>
type DraftResponse = ApiResponse<AnyDraftEntity>

export { DraftResourceType }
export type { DraftRequest, DraftRequestBody, DraftResponse }
