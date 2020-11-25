import React, { ReactNode } from 'react'
import * as S from './ImageUploader.styles'
import { UploaderProps } from './Uploader'

interface ImageUploaderProps extends Pick<UploaderProps, 'eager' | 'resource' | 'id' | 'onSuccess'> {
  children: ReactNode
  className?: string
}

function ImageUploader(props: ImageUploaderProps) {
  return (
    <S.Wrapper className={props.className}>
      <S.Uploader
        onSuccess={props.onSuccess}
        eager={props.eager}
        resourceType="image"
        resource={props.resource}
        id={props.id}>
        {props.children}
      </S.Uploader>
    </S.Wrapper>
  )
}

export default ImageUploader
export { ImageUploader }
export type { ImageUploaderProps }
