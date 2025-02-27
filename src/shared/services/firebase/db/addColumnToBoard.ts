import { db } from '@config';
import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { getCollection } from '@shared/services/firebase';
import { sortArrByKey } from '@shared/utils';
import { AddColumnsProps, Column } from '@store';
import { addDoc, collection } from 'firebase/firestore';

export const addColumnToBoard = async ({ boardID, columns }: AddColumnsProps) => {
  try {
    columns?.map(async (column) => {
      const id = await addDoc(
        collection(db, BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME),
        column,
      );
      return { id, ...column };
    });

    const updatedColumns =
      (await getCollection<Column>([BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME])) ??
      [];

    console.log(updatedColumns);

    return sortArrByKey(updatedColumns, 'order');
  } catch (error) {
    console.error('Error adding columns:', error);
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
};
