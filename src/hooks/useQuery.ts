import { useLocation } from 'react-router-dom'

function useQuery<T extends any>(): T {
  const entries = new URLSearchParams(useLocation().search).entries()
  let entry = entries.next()
  const values = []

  while (!entry.done) {
    values.push(entry.value)

    entry = entries.next()
  }

  return Object.fromEntries(values) as T
}

export default useQuery
export { useQuery }
