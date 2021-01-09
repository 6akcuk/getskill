import { useInfiniteEntities } from '../../hooks'
import { Specialist } from './types'

interface UseSpecialistsProps {
  limit?: number
}

function useSpecialists(props: UseSpecialistsProps) {
  return useInfiniteEntities<Specialist>({
    endpoint: '/api/specialists',
    params: props,
    limit: props?.limit,
  })
}

export { useSpecialists }
