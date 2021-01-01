import { User, PrismaClient } from '@prisma/client'
import { IPToNumber, generateRefreshToken } from '../../../utils'
import { NowRequest } from '@vercel/node'

interface GetRefreshTokenParams {
  request: NowRequest
  user: User
}

const prisma = new PrismaClient()

async function getRefreshToken(params: GetRefreshTokenParams) {
  const token = generateRefreshToken(params.user)

  await prisma.userToken.create({
    data: {
      token,
      deviceId: params.request.headers['user-agent'] ?? '',
      ip: IPToNumber(params.request.connection.remoteAddress ?? ''),
      user: {
        connect: {
          id: params.user.id,
        },
      },
    },
  })

  return token
}

export default getRefreshToken
export { getRefreshToken }
