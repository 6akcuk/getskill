interface Error {
  code: number
  message: string
}

interface Message {
  code: number
  message: string
}

interface StreamResponseBody<Result> {
  result: Result
  success: boolean
  errors: Error[]
  messages: Message[]
}

export type { StreamResponseBody }
