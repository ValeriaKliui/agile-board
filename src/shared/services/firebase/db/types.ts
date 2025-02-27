import { BoardCreationInfo } from '@store';

export type AddingMembersProps = Pick<BoardCreationInfo, 'members' | 'id' | 'owner'>;

export type DataWithId<T> = T & {
  id: string;
};

export interface DateTimeParams {
  timestamp?: Timestamp;
  format?: string;
}
