import { updateProfileContacts, ApiRequestWithAuth, ApiResponse, withAuth } from '../../apiSrc'

async function contacts(req: ApiRequestWithAuth, res: ApiResponse) {
  return updateProfileContacts(req, res)
}

export default withAuth(contacts)
