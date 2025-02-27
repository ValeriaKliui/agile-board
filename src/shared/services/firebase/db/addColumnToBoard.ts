import { db } from '@config';
import { BOARDS_COLLECTION_NAME } from '@constants';
import { BoardInfo } from '@store';
import { addDoc, collection } from 'firebase/firestore';

export const addColumnToBoard = async ({ id, columns }: Pick<BoardInfo, 'columns' | 'id'>) => {
  try {
    const batchPromises = columns?.map((column) => {
      addDoc(collection(db, BOARDS_COLLECTION_NAME, id, 'columns'), column);
    });

    if (batchPromises) await Promise.all(batchPromises);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
