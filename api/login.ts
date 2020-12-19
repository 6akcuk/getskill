import { login, LoginRequest, LoginResponse } from '../apiSrc'

export default async (req: LoginRequest, res: LoginResponse) => login(req, res)
