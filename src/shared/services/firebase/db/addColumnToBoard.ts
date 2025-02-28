import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { getCollection } from '@pages/home/services';
import { sortArrByKey } from '@shared/utils';
import { AddColumnsProps, Column } from '@store';

import { setData } from './setData';

export const addColumnToBoard = async ({ boardID, columns }: AddColumnsProps) => {
  try {
    columns?.map(async (column) => {
      const id  = await setData({collectionPaths:[BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME],data: column })
      return { id, ...column };
    });

    const updatedColumns =
      (await getCollection<Column>({collectionPaths:[BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME]})) ??
      [];

    return sortArrByKey(updatedColumns, 'order');
  } catch (error) {
    console.error('Error adding columns:', error);
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
};
