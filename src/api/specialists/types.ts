import { User } from '../user/types'
import { ServiceTag } from '../tag/types'

interface Specialist {
  id: number
  scores: number
  userId: number

  user: User
  tags?: ServiceTag[]
}

export type { Specialist }
