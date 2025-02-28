import { BoardInfo } from '@store';
import { Timestamp } from 'firebase/firestore';

export type AddingMembersProps = Pick<BoardInfo, 'members' | 'boardID'>;
export type CollectionPats = readonly [string, ...string[]]

export interface DateTimeParams {
  timestamp?: Timestamp;
  format?: string;
}
export interface CollectionWithParams{
  itemsAmount?:number;
  collectionPaths: CollectionPats;
  searchTerm?:string;
  searchKey?:string
}
export type DataWithId<T> = T & {
  id: string;
};
export interface SetDataParams<T>{
  collectionPaths: CollectionPats;
  docID?: string | null,
  data: T,
}