import client from '../api/client'

function fetcher(url: string, params?: any) {
  return client.get(url, { params }).then(response => response.data)
}

export { fetcher }
