import { Timestamp } from 'firebase/firestore';

export type CollectionPaths = readonly [string, ...string[]];

export interface DateTimeParams {
  timestamp?: Timestamp | Date;
  format?: string;
}
export interface CollectionWithParams {
  itemsAmount?: number;
  collectionPaths: CollectionPaths;
  searchTerm?: string;
  searchKey?: string;
  filterKey?: string;
  filterValues?: string[];
}
export type DataWithId<T> = T & {
  id: string;
};
export interface DataParams<T> {
  collectionPaths: CollectionPaths;
  data: T;
  docID?: string;
}

export interface MoveTocumentParams {
  collectionPaths: CollectionPaths;
  targetCollectionPaths: CollectionPaths;
}
