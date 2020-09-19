function IPToNumber(ip) {
  return ip
    .split('.')
    .map((octet, index, array) => parseInt(octet, 10) * Math.pow(256, array.length - index - 1))
    .reduce((prev, curr) => prev + curr)
}

export { IPToNumber }
