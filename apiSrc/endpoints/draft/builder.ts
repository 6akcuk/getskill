import { DraftRequest, DraftResourceType } from './types'
import { VideoLesson } from '@prisma/client'
import draftVideolesson from './videolesson'

interface DraftBuilderParams {
  request: DraftRequest
}

type AnyDraftEntity = VideoLesson
type DraftBuilderHandle = (request: DraftRequest) => Promise<AnyDraftEntity>

function draftBuilder(params: DraftBuilderParams) {
  const builder: Record<DraftResourceType, DraftBuilderHandle> = {
    [DraftResourceType.VIDEOLESSON]: request => draftVideolesson(request),
  }

  return builder[params.request.body.resourceType](params.request)
}

export default draftBuilder
export { draftBuilder }
export type { AnyDraftEntity, DraftBuilderParams, DraftBuilderHandle, VideoLesson }
