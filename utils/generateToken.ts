import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

function generateToken(user: User) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SIGNATURE,
    { expiresIn: '6h' },
  )
}

export { generateToken }
