function createEnum<T extends { [index: string]: U }, U extends string>(x: T) {
  return x
}

type Enum<T extends { [index: string]: string }> = T[keyof T]

export { createEnum }
export type { Enum }
