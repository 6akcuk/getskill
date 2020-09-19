import { NowRequest, NowResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'
import { withAuth, getUserPayloadFromToken } from '../utils'

const prisma = new PrismaClient()

async function me(req: NowRequest, res: NowResponse) {
  const payload = getUserPayloadFromToken(req.headers.authorization)
  const user = await prisma.user.findOne({
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
    avatar: user.profile.avatar,
    publicName: user.profile.publicName,
  })
}

export default withAuth(me)
