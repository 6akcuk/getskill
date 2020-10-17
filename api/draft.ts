import { draftBuilder, DraftRequest, DraftResponse, withAuth } from '../apiSrc'

async function draft(req: DraftRequest, res: DraftResponse) {
  return res.json(
    await draftBuilder({
      request: req,
    }),
  )
}

export default withAuth(draft)
