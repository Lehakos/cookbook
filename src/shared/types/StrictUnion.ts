type UnionKeys<T> = T extends any ? keyof T : never;
type StrictUnionHelper<T, TAllKeys extends PropertyKey> = T extends any
  ? T & Partial<Record<Exclude<TAllKeys, keyof T>, never>>
  : never;

/**
 * Тип для правильной работы Discriminated Union типов
 * https://stackoverflow.com/questions/52677576/typescript-discriminated-union-allows-invalid-state/52678379#52678379
 */
export type StrictUnion<T> = StrictUnionHelper<T, UnionKeys<T>>;
