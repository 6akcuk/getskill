import React from 'react'
import { Ring, First, Second, Third, Forth } from './Spinner.styles'

interface SpinnerProps {
  className?: string
}

function Spinner(props: SpinnerProps) {
  return (
    <Ring className={props.className}>
      <First />
      <Second />
      <Third />
      <Forth />
    </Ring>
  )
}

export default Spinner
