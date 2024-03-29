import { User, PrismaClient } from '@prisma/client'
import { generateAuthToken, IPToNumber } from '../../../utils'
import { NowRequest } from '@vercel/node'

interface GetAuthTokenParams {
  request: NowRequest
  user: User
}

const prisma = new PrismaClient()

async function getAuthToken(params: GetAuthTokenParams) {
  const token = generateAuthToken(params.user)

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

export default getAuthToken
export { getAuthToken }
