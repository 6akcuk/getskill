import { Prisma } from '@prisma/client'

interface Asset extends Prisma.InputJsonObject {
  publicId: string
  version: string
}

export type { Asset }
