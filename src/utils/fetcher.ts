import client from '../api/client'

function fetcher(url: string) {
  return client.get(url).then(response => response.data)
}

export { fetcher }
