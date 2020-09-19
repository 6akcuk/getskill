import { NowRequest, NowResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'
import argon2 from 'argon2'
import { generateToken, IPToNumber } from '../utils'

interface LoginRequestBody {
  username: string
  password: string
}

const prisma = new PrismaClient()

export default async (req: NowRequest, res: NowResponse) => {
  const { username, password } = req.body as LoginRequestBody

  const field = username.match(/^\+\d+/) ? 'phone' : 'email'
  const user = await prisma.user.findOne({
    where: {
      [field]: username,
    },
  })

  if (!user || (user && !(await argon2.verify(user.password, password)))) {
    return res.status(401).send({
      message: 'Неверные имя пользователя/пароль',
    })
  }

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
