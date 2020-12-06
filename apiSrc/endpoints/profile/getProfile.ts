import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { PrismaClient, Profile } from '@prisma/client'
import { ApiResponse, ApiRequest } from '../types'

interface GetProfileRequestQuery extends NowRequestQuery {
  id: string
}

type UserProfile = Omit<Profile, 'userId'>
type GetProfileRequest = ApiRequest<NowRequestBody, GetProfileRequestQuery>
type GetProfileResponse = ApiResponse<UserProfile>

const prisma = new PrismaClient()

async function getProfile(request: GetProfileRequest, response: GetProfileResponse) {
  const user = await prisma.user.findOne({
    include: {
      profile: true,
    },
    where: {
      id: Number(request.query.id),
    },
  })

  if (!user) {
    return response.status(404).json({
      message: 'Пользователь не найден',
    })
  }

  return response.json({
    id: user.profile.id,
    publicName: user.profile.publicName,
    avatar: user.profile.avatar,
    about: user.profile.about,
    contacts: user.profile.contacts,
  })
}

export default getProfile
export { getProfile }
export type { GetProfileRequest, GetProfileResponse }
