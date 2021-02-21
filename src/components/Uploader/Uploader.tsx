import React, { useCallback, useState, ReactNode, useEffect } from 'react'
import useUploadUrl, { UploadResource, UseUploadUrlParams } from './useUploadUrl'
import { UploadResponse } from './UploadHandler'
import * as S from './Uploader.styles'

type FileProps = File

interface UploaderProps extends Omit<UseUploadUrlParams, 'cacheBuster'> {
  onSuccess: (response?: UploadResponse) => void
  children: ReactNode
  accept?: string[] | string[]
  className?: string
  maxSize?: number
}

function Uploader(props: UploaderProps) {
  const [uploadUrl, setUploadUrl] = useState<string>()
  const [file, setFile] = useState<FileProps>()
  const [cacheBuster, setCacheBuster] = useState(1)
  const { data, isValidating, error } = useUploadUrl({
    cacheBuster,
    file,
    ...props,
  })

  useEffect(() => {
    if (data) {
      setUploadUrl(data)
    }
  }, [data])

  useEffect(() => {
    if (file && error) {
      setFile(undefined)
      setUploadUrl(undefined)
    }
  }, [file, error])

  const { onSuccess, maxSize = 1024 * 1024 * 1024, accept = 'image/*' } = props
  const handleDrop = useCallback(
    acceptedFiles => {
      setFile(acceptedFiles[0])
    },
    [onSuccess],
  )
  const handleRemove = useCallback(() => {
    setFile(undefined)
    setUploadUrl(undefined)
    onSuccess(undefined)
  }, [onSuccess])
  const handleSuccess = useCallback(
    (response: UploadResponse) => {
      setFile(undefined)
      setUploadUrl(undefined)
      onSuccess(response)
      setCacheBuster(buster => buster + 1)
    },
    [onSuccess],
  )

  return (
    <S.Wrapper className={props.className}>
      {file && (
        <S.UploadHandler
          uploadUrl={uploadUrl}
          file={file}
          onSuccess={handleSuccess}
          onFailure={handleRemove}
        />
      )}
      <S.Dropzone accept={accept} maxSize={maxSize} onDrop={handleDrop} disabled={isValidating}>
        {isValidating && (
          <S.Awaiting>
            <S.Spinner />
          </S.Awaiting>
        )}
        {props.children}
      </S.Dropzone>
    </S.Wrapper>
  )
}

export default Uploader
export { Uploader, UploadResource }
export type { UploaderProps }
