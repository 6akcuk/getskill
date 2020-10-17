import React, { ReactNode } from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import * as S from './Dropzone.styles'

interface DropzoneProps extends DropzoneOptions {
  testId?: string
  children: ReactNode
}

function Dropzone(props: DropzoneProps) {
  const { getInputProps, getRootProps } = useDropzone({
    ...props,
    accept: props.accept ?? 'image/*',
    maxSize: props.maxSize ?? 3145728, // 3MB
  })

  return (
    <S.Content data-testid={`${props.testId ?? 'uploader'}_dropzone`} {...getRootProps()}>
      <input {...getInputProps()} />
      {props.children}
    </S.Content>
  )
}

export default Dropzone
export { Dropzone }
export type { DropzoneProps }
