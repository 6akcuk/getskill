import { NowRequest, NowResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'
import argon2 from 'argon2'
import { generateToken, IPToNumber } from '../utils'

interface RegisterRequestBody {
  email: string
  phone: string
  publicName: string
  password: string
}

const prisma = new PrismaClient()

export default async (req: NowRequest, res: NowResponse) => {
  const { email, phone, publicName, password } = req.body as RegisterRequestBody

  const passwordHash = await argon2.hash(password)

  const user = await prisma.user.create({
    data: {
      email,
      phone,
      password: passwordHash,
      profile: {
        create: {
          publicName,
        },
      },
    },
  })

  const token = generateToken(user)

  await prisma.userToken.create({
    data: {
      token,
      deviceId: req.headers['user-agent'],
      ip: IPToNumber(req.connection.remoteAddress),
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  })

  return res.status(200).json({
    token,
  })
}
