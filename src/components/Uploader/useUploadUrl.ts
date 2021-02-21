import useSWR from 'swr'
import { useMemo } from 'react'
import { AssetTransformation } from '../../api'

enum UploadResource {
  video = 'video',
  avatar = 'avatar',
}

interface UseUploadUrlParams {
  resourceType: 'image' | 'video' | 'auto'
  resource: UploadResource
  cacheBuster: number
  file?: File
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

  return useSWR<string>(
    params.file
      ? // eslint-disable-next-line max-len
        `/api/upload_url?resource_type=${params.resourceType}&resource=${
          params.resource
        }&eager=${eager}&eager_async=${Boolean(params.eagerAsync)}&id=${params.id}&filetype=${
          params.file.type
        }&cacheBuster=${params.cacheBuster}`
      : null,
    { suspense: false },
  )
}

export default useUploadUrl
export { UploadResource, useUploadUrl }
export type { UseUploadUrlParams }
