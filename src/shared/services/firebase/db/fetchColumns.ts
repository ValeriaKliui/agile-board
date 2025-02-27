import { BOARDS_COLLECTION_NAME } from '@constants';
import { getCollection } from '@shared/services/firebase';
import { BoardColumnProps, Column } from '@store';

export const fetchColumns = async ({ boardID }: BoardColumnProps) => {
  try {
    const columns = await getCollection<Column>([BOARDS_COLLECTION_NAME, boardID, 'columns']);
    return columns?.map(({ id, ...column }) => ({ ...column, columnID: id }));
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
