import React, { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '../../../../utils'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { isLoggedInState } from '../../../auth/recoil/atoms'

interface SWRProviderProps {
  children: ReactNode
}

function SWRProvider(props: SWRProviderProps) {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState)

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        suspense: true,
        onError: (err: AxiosError) => {
          // eslint-disable-next-line no-console
          console.error(err)

          if (err.response?.status === 401) {
            setIsLoggedIn(false)
          }
        },
      }}>
      {props.children}
    </SWRConfig>
  )
}

export default SWRProvider
