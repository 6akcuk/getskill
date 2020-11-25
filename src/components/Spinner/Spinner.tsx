import React from 'react'
import { Ring, First, Second, Third, Forth } from './Spinner.styles'

interface SpinnerProps {
  className?: string
  inverse?: boolean
}

function Spinner(props: SpinnerProps) {
  return (
    <Ring className={props.className}>
      <First inverse={props.inverse} />
      <Second inverse={props.inverse} />
      <Third inverse={props.inverse} />
      <Forth inverse={props.inverse} />
    </Ring>
  )
}

export default Spinner
export { Spinner }
