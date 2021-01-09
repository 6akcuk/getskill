import { getSpecialists, SpecialistsRequest, SpecialistsResponse, GetSpecialistsResponse } from '../apiSrc'

async function specialists(req: SpecialistsRequest, res: SpecialistsResponse) {
  switch (req.method) {
    case 'GET':
    default:
      return getSpecialists(req, res as GetSpecialistsResponse)
  }
}

export default specialists
