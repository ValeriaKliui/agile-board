import { db } from '@config';
import { BOARDS_COLLECTION_NAME } from '@constants';
import { getCollection } from '@shared/services/firebase/db/getCollection';
import { AddColumnsProps, Column } from '@store';
import { addDoc, collection } from 'firebase/firestore';

export const addColumnToBoard = async ({ boardID, columns }: AddColumnsProps) => {
  try {
    columns?.map(async (column) => {
      const id = await addDoc(collection(db, BOARDS_COLLECTION_NAME, boardID, 'columns'), column);
      return { id, ...column };
    });

    const updatedColumns = await getCollection<Column>([
      BOARDS_COLLECTION_NAME,
      boardID,
      'columns',
    ]);

    return updatedColumns;
  } catch (error) {
    console.error('Error adding columns:', error);
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
};
