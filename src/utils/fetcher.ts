import client from '../api/client'

function fetcher(url: string, params?: any) {
  return client.get(url, { params }).then(
    response =>
      new Proxy(response.data, {
        get(target, name) {
          if (name === '_total') {
            return response.headers.total
          }

          return target[name]
        },
      }),
  )
}

export { fetcher }
