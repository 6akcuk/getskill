import { InputJsonObject } from '@prisma/client'

interface Asset extends InputJsonObject {
  publicId: string
  version: string
}

export type { Asset }
