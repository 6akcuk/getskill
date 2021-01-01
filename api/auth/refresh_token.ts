import { refreshToken, RefreshTokenRequest, RefreshTokenResponse } from '../../apiSrc'

export default async (req: RefreshTokenRequest, res: RefreshTokenResponse) => refreshToken(req, res)
