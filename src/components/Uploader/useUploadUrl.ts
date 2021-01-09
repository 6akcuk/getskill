import useSWR from 'swr'
import { useMemo } from 'react'
import { AssetTransformation } from '../../api'

enum UploadResource {
  videolesson = 'videolesson',
  avatar = 'avatar',
}

interface UseUploadUrlParams {
  resourceType: 'image' | 'video' | 'auto'
  resource: UploadResource
  cacheBuster: number
  eager?: AssetTransformation[]
  eagerAsync?: boolean
  id?: string
}

const eagerTransformation: Record<keyof AssetTransformation, string> = {
  width: 'w',
  height: 'h',
  crop: 'c',
  gravity: 'g',
  streaming_profile: 'sp',
  format: 'f',
}

function useUploadUrl(params: UseUploadUrlParams) {
  const eager = useMemo(
    () =>
      (params.eager ?? [])
        .map(eager =>
          Object.entries(eager)
            .filter(([, value]) => typeof value !== 'undefined')
            .map(
              ([transformation, value]) =>
                `${eagerTransformation[transformation as keyof AssetTransformation]}_${value}`,
            )
            .join(','),
        )
        .join('|'),
    [params.eager],
  )

  const { data, isValidating } = useSWR<string>(
    // eslint-disable-next-line max-len
    `/api/upload_url?resource_type=${params.resourceType}&resource=${
      params.resource
    }&eager=${eager}&eager_async=${Boolean(params.eagerAsync)}&id=${params.id}&cacheBuster=${
      params.cacheBuster
    }`,
    { suspense: false },
  )

  return isValidating ? undefined : data
}

export default useUploadUrl
export { UploadResource, useUploadUrl }
export type { UseUploadUrlParams }
