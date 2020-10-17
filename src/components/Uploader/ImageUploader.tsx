import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import * as S from './ImageUploader.styles'

type FileProps = File & {
  preview: string
}

interface RenderImagePreviewProps {
  src?: string | undefined
  onRemove: () => void
}

interface ImageUploaderProps {
  image?: string
  className?: string
  maxSize?: number
  onChange: (image: File | null) => void
  renderImagePreview?: (props: RenderImagePreviewProps) => ReactNode
  children: ReactNode
}

function ImageUploader(props: ImageUploaderProps) {
  const [image, setImage] = useState<FileProps | string | null>(() => props.image ?? null)
  const src = useMemo(() => {
    if (typeof image === 'string') {
      return image
    }

    return image ? image.preview : undefined
  }, [image])

  const { onChange } = props
  const maxSize = props.maxSize ?? 5242880
  const handleDrop = useCallback(
    acceptedFiles => {
      setImage({ ...acceptedFiles[0], preview: URL.createObjectURL(acceptedFiles[0]) })
      onChange(acceptedFiles[0])
    },
    [onChange],
  )
  const handleRemove = useCallback(() => {
    setImage(null)
    onChange(null)
  }, [onChange])

  return (
    <S.Wrapper className={props.className}>
      {props.renderImagePreview?.({ src, onRemove: handleRemove })}
      <S.Dropzone maxSize={maxSize} onDrop={handleDrop}>
        {props.children}
      </S.Dropzone>
    </S.Wrapper>
  )
}

export default ImageUploader
export { ImageUploader }
export type { ImageUploaderProps, RenderImagePreviewProps }
