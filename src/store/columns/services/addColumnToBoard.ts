import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { getCollection, setData } from '@shared/services';
import { sortArrByKey } from '@shared/utils';
import { AddColumnsProps, Column } from '@store';

const addColumnsWithIds = async (columns: Column[], boardID: string) => {
  return await Promise.all(
    columns?.map(async (column) => {
      const id = await setData({
        collectionPaths: [BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME],
        data: column,
      });
      return { ...column, columnID: id };
    }) ?? [],
  );
};

const getColumnsWithId = async (boardID: string) => {
  const columns = await getCollection<Column>({
    collectionPaths: [BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME],
  });

  return (
    columns?.map(({ id, ...column }) => ({
      ...column,
      columnID: id,
    })) ?? []
  );
};

export const addColumnToBoard = async ({ boardID, columns }: AddColumnsProps) => {
  try {
    await addColumnsWithIds(columns, boardID);
    const columnsWithID = await getColumnsWithId(boardID);

    return sortArrByKey(columnsWithID, 'order');
  } catch (error) {
    console.error('Error adding columns:', error);
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
};
