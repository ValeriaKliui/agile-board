import { BoardCreationInfo } from '@store/boards/types';

export type AddingMembersProps = Pick<BoardCreationInfo, 'members'> & { boardID: string };

export type DataWithId<T> = T & {
  id: string;
};
