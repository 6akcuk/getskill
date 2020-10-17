import React, { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '../../../../utils'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { authTokenState } from '../../../auth/atoms'

interface SWRProviderProps {
  children: ReactNode
}

function SWRProvider(props: SWRProviderProps) {
  const setAuthToken = useSetRecoilState(authTokenState)

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        onError: (err: AxiosError) => {
          // Clear auth token
          if (err.response?.status === 401) {
            setAuthToken(null)
          }
        },
      }}>
      {props.children}
    </SWRConfig>
  )
}

export default SWRProvider
