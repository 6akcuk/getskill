function getToken(token: string) {
  return token.match(/Bearer/) ? token.split(' ')[1] : token
}

export { getToken }
