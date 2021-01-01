import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

interface GenerateTimeTokenOptions {
  userId: number
  expiresIn?: string
}

function generateAuthToken(user: User) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SIGNATURE!,
    { expiresIn: '6h' },
  )
}

function generateRefreshToken(user: User) {
  return jwt.sign(
    {
      id: user.id,
      refresh: true,
    },
    process.env.JWT_SIGNATURE!,
    { expiresIn: '30d' },
  )
}

function generateTimeToken(options: GenerateTimeTokenOptions) {
  return jwt.sign(
    {
      userId: options.userId,
    },
    process.env.JWT_SIGNATURE!,
    { expiresIn: options.expiresIn ?? '10m' },
  )
}

export { generateAuthToken, generateRefreshToken, generateTimeToken }
