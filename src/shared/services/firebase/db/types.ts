import { BoardInfo } from '@store';
import { Timestamp } from 'firebase/firestore';

export type AddingMembersProps = Pick<BoardInfo, 'members' | 'boardID' | 'owner'>;

export type DataWithId<T> = T & {
  id: string;
};

export interface DateTimeParams {
  timestamp?: Timestamp;
  format?: string;
}
