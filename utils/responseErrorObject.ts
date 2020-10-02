interface ResponseErrorObject {
  error: {
    code?: number
    message: string
  }
}

function responseErrorObject(message: string, code?: number | undefined) {
  return {
    error: {
      code,
      message,
    },
  }
}

export default responseErrorObject
export { responseErrorObject }
