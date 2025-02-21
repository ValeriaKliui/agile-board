export type UpdateDataType = 'add' | 'remove' | 'set';

export interface FirestoreItem<T> {
  id: string;
  [key: string]: T;
}

export interface GetCollectionProps<T> {
  collectionPath: string;
  subCollectionPath: string | null;
  queryFilter: { field: string; value: T } | null;
}
