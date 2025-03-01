import { BoardInfo, User } from '@store';
import { Timestamp } from 'firebase/firestore';

export type AddingMembersProps = Pick<BoardInfo, 'members' | 'boardID'>;
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
  docID?: string | null;
  data: T;
}

export interface UserByIDsParams {
  IDs: string[];
  extractKey?: keyof User;
}
