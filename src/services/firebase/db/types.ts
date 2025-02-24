export type UpdateDataType = 'add' | 'remove' | 'set';

export interface GetCollectionProps<T> {
  collectionPath: string;
  subCollectionPath: string | null;
  queryFilter: { field: string; value: T } | null;
}

export type DataWithId<T> = T & {
  id: string;
};
