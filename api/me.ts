import { NowRequest, NowResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'
import { withAuth, getAuthTokenPayload } from '../apiSrc'

const prisma = new PrismaClient()

async function me(req: NowRequest, res: NowResponse) {
  const payload = getAuthTokenPayload(req.headers.authorization)
  const user = await prisma.user.findUnique({
    where: {
      id: Number(payload.id),
    },
    include: {
      profile: true,
    },
  })

  return res.json({
    id: user.id,
    email: user.email,
    phone: user.phone,
    role: user.role,
    profile: {
      avatar: user.profile.avatar,
      publicName: user.profile.publicName,
      about: user.profile.about,
      contacts: user.profile.contacts,
    },
    isEmailVerified: user.isEmailVerified,
    isPhoneVerified: user.isPhoneVerified,
  })
}

export default withAuth(me)
