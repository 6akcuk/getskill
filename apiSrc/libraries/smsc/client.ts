import axios from 'axios'

function createClient() {
  const baseClient = axios.create({
    baseURL: 'https://smsc.ru/sys/send.php',
  })

  baseClient.interceptors.request.use(config => {
    config.params.login = process.env.SMSC_LOGIN
    config.params.psw = process.env.SMSC_PASSWORD
    config.params.fmt = 3
    return config
  })

  return baseClient
}

const client = createClient()

export default client
export { client }
