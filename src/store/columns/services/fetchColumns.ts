import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { getCollection } from '@shared/services';
import { sortArrByKey } from '@shared/utils';
import { BoardColumnProps, Column } from '@store';

export const fetchColumns = async ({ boardID }: BoardColumnProps) => {
  try {
    const columns = await getCollection<Column>({
      collectionPaths: [BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME],
    });
    const columnsWithIDs = columns?.map(({ id, ...column }) => ({ ...column, columnID: id })) ?? [];
    const sortedByOrder = sortArrByKey(columnsWithIDs, 'order');

    return sortedByOrder;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
