import { BoardCreationInfo } from '@store/boards/types';

export type AddingMembersProps = Pick<BoardCreationInfo, 'members' | 'id'>;

export type DataWithId<T> = T & {
  id: string;
};
