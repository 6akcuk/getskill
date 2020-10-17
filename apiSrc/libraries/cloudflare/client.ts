import axios from 'axios'

function createClient() {
  const baseClient = axios.create({
    baseURL: 'https://api.cloudflare.com/client',
    headers: {
      // TODO environment variables
      'X-Auth-Key': '',
      'X-Auth-Email': '',
    },
  })

  return baseClient
}

const client = createClient()

export default client
export { client }
