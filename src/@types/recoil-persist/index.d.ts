declare module 'recoil-persist' {
  import React from 'react'

  interface Config {
    key: string
    storage: Storage
  }

  interface RecoilPersistResult {
    RecoilPersist: React.FC
    updateState: () => void
  }

  function RecoilPersist(paths?: string[], config?: Config): RecoilPersistResult

  export default RecoilPersist
}
