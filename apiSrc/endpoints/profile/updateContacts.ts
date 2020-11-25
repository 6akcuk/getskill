import { User, PrismaClient } from '@prisma/client'
import { UserContacts } from './types'
import { ApiRequestWithAuth, ApiResponse } from '../types'

interface UpdateProfileContactsRequestBody {
  contacts: UserContacts
}
type UpdateProfileContactsRequest = ApiRequestWithAuth<UpdateProfileContactsRequestBody>
type UpdateProfileContactsResponse = ApiResponse<User>

const prisma = new PrismaClient()

async function updateProfileContacts(
  request: UpdateProfileContactsRequest,
  response: UpdateProfileContactsResponse,
) {
  return response.json(
    await prisma.user.update({
      include: {
        profile: true,
      },
      where: {
        id: Number(request.user.id),
      },
      data: {
        profile: {
          update: {
            contacts: request.body.contacts,
          },
        },
      },
    }),
  )
}

export default updateProfileContacts
export { updateProfileContacts }
export type { UpdateProfileContactsRequest, UpdateProfileContactsResponse }
