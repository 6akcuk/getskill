import { AxiosInstance } from 'axios'
import { EndpointDefinition, EndpointFunction } from './defineEndpoint'

type Endpoints<T extends Record<string, EndpointDefinition<any, any, any>>> = {
  [P in keyof T]: T[P] extends EndpointDefinition<infer RqP, infer RqB, infer ReB>
    ? EndpointFunction<RqP, RqB, ReB>
    : never
}

function combineEndpoints<T extends Record<string, EndpointDefinition<any, any, any>>>(
  client: AxiosInstance,
  endpointDefinitions: T,
): Endpoints<T> {
  return Object.fromEntries(
    Object.entries(endpointDefinitions).map(([name, endpointDefinition]) => [
      name,
      endpointDefinition(client),
    ]),
  ) as Endpoints<T>
}

export default combineEndpoints
export { combineEndpoints }
