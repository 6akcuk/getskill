import SWR, { keyInterface, responseInterface } from 'swr'

type WithMeta<Data> = Data extends any[] ? Data & { _total: number } : Data
type Response<Data, Error> = responseInterface<Data, Error> & {
  data?: WithMeta<Data>
}

function useSWR<Data = any, Error = any>(key: keyInterface) {
  return SWR<Data, Error>(key) as Response<Data, Error>
}

export default useSWR
export { useSWR }
