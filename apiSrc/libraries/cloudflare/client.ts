import axios from 'axios'

function createClient() {
  const baseClient = axios.create({
    baseURL: 'https://api.cloudflare.com/client',
    headers: {
      'X-Auth-Key': process.env.CLOUDFLARE_STREAM_AUTH_KEY!,
      'X-Auth-Email': process.env.CLOUDFLARE_STREAM_AUTH_EMAIL!,
    },
  })

  return baseClient
}

const client = createClient()

export default client
export { client }
