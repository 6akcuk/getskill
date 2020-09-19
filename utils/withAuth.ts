import { NowRequest, NowResponse } from '@vercel/node'
import { verifyToken } from './verifyToken'

function withAuth(next: (req: NowRequest, res: NowResponse) => void) {
  return (req: NowRequest, res: NowResponse) => {
    if (
      !req.headers.authorization ||
      (req.headers.authorization && !verifyToken(req.headers.authorization))
    ) {
      return res.status(401).json({
        message: 'Вы не авторизованы',
      })
    }

    return next(req, res)
  }
}

export { withAuth }
