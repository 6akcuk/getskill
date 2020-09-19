import 'recoil'

declare module 'recoil' {
  import { atom as recoilAtom, AtomOptions as RecoilAtomOptions, RecoilState } from 'recoil'

  interface AtomOptions<T> extends RecoildAtomOptions<T> {
    persistence_UNSTABLE?: { type: string }
  }

  export function atom<T>(options: AtomOptions<T>): RecoilState
}
