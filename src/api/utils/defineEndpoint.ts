import { AxiosInstance, AxiosResponse } from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-types
type VoidArgument = undefined | null | {}

interface EndpointRequestCallbackArgument<RequestParams, RequestBody> {
  client: AxiosInstance
  params: RequestParams
  body: RequestBody
}

interface EndpointRequestCallback<RequestParams, RequestBody, ResponseBody> {
  (arg: EndpointRequestCallbackArgument<RequestParams, RequestBody>): Promise<AxiosResponse<ResponseBody>>
}

interface EndpointFunctionArgument<RequestParams, RequestBody> {
  params?: RequestParams
  body?: RequestBody
}

interface EndpointFunction<RequestParams, RequestBody, ResponseBody> {
  (arg: EndpointFunctionArgument<RequestParams, RequestBody>): Promise<AxiosResponse<ResponseBody>>
}

interface EndpointDefinition<RequestParams, RequestBody, ResponseBody> {
  (client: AxiosInstance): EndpointFunction<RequestParams, RequestBody, ResponseBody>
}

function defineEndpoint<RequestParams, RequestBody, ResponseBody>(
  endpointCallback: EndpointRequestCallback<RequestParams, RequestBody, ResponseBody>,
): EndpointDefinition<RequestParams, RequestBody, ResponseBody> {
  return function createEndpointFunction(client: AxiosInstance) {
    return function performEndpointCall({
      params,
      body,
    }: EndpointFunctionArgument<RequestParams, RequestBody>) {
      return endpointCallback({
        client,
        params: params as RequestParams,
        body: body as RequestBody,
      })
    }
  }
}

export default defineEndpoint
export type {
  EndpointRequestCallbackArgument,
  EndpointRequestCallback,
  EndpointFunctionArgument,
  EndpointFunction,
  EndpointDefinition,
  VoidArgument,
}
