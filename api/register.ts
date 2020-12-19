import { register, RegisterRequest, RegisterResponse } from '../apiSrc'

export default async (req: RegisterRequest, res: RegisterResponse) => register(req, res)
