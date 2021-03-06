import { useMemo } from 'react'
import { useSWRInfinite, SWRInfiniteResponseInterface } from 'swr'
import qs from 'querystring'

interface InfiniteEntitiesPaginationParams {
  page?: number
  limit?: number
}
interface InfiniteEntitiesMeta {
  isEmpty: boolean
  isReachedEnd: boolean
}
interface UseInfiniteEntitiesParams extends InfiniteEntitiesPaginationParams, Record<string, any> {}
interface UseInfiniteEntitiesProps {
  endpoint: string
  params?: UseInfiniteEntitiesParams
  limit?: number
}
interface UseInfiniteEntitiesResult<Entity>
  extends SWRInfiniteResponseInterface<Entity[]>,
    InfiniteEntitiesMeta {
  entities: Entity[]
}

function useInfiniteEntities<Entity>(props: UseInfiniteEntitiesProps): UseInfiniteEntitiesResult<Entity> {
  const params = qs.stringify(props.params ?? {})
  const result = useSWRInfinite<Entity[]>(index => `${props.endpoint}?page=${index + 1}&${params}`)

  const entities = useMemo(() => (result.data ?? []).flat(), [result.data])
  const isEmpty = useMemo(() => result.data?.[0]?.length === 0, [result.data])
  const isReachedEnd = useMemo(
    () =>
      isEmpty || Boolean(result.data && result.data[result.data?.length - 1]?.length < (props.limit ?? 10)),
    [isEmpty, result.data, props.limit],
  )

  return {
    ...result,
    entities,
    isEmpty,
    isReachedEnd,
  }
}

export default useInfiniteEntities
export { useInfiniteEntities }
export type { InfiniteEntitiesMeta, InfiniteEntitiesPaginationParams, UseInfiniteEntitiesResult }
