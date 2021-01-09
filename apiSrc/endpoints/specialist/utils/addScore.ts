import { ScoreReason } from '../types'
import { PrismaClient } from '@prisma/client'

interface AddScoreProps {
  userId?: number
  reason: ScoreReason
  entityId: number
}

const scoreMapping: Record<ScoreReason, number> = {
  [ScoreReason.PUBLISH_VIDEOLESSON]: 10,
}

const prisma = new PrismaClient()

async function addScore(props: AddScoreProps) {
  if (props.userId) {
    await prisma.user.update({
      data: {
        specialist: {
          update: {
            SpecialistScoreHistory: {
              create: {
                amount: scoreMapping[props.reason],
                reason: props.reason,
              },
            },
            scores: {
              increment: scoreMapping[props.reason],
            },
          },
        },
      },
      where: {
        id: props.userId,
      },
    })
  }
}

export default addScore
export { addScore }
