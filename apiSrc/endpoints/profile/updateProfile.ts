import { Asset } from '../../shared'
import { ApiRequestWithAuth, ApiResponse } from '../types'
import { User, PrismaClient } from '@prisma/client'

interface UpdateProfileRequestBody {
  publicName: string
  avatar?: Asset
  about?: string
}
type UpdateProfileRequest = ApiRequestWithAuth<UpdateProfileRequestBody>
type UpdateProfileResponse = ApiResponse<User>

const prisma = new PrismaClient()

async function updateProfile(request: UpdateProfileRequest, response: UpdateProfileResponse) {
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
            publicName: request.body.publicName,
            avatar: request.body.avatar,
            about: request.body.about,
          },
        },
      },
    }),
  )
}

export default updateProfile
export { updateProfile }
export type { UpdateProfileRequest, UpdateProfileResponse }
