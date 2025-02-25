import { db } from '@config';
import { BOARDS_DB_NAME } from '@constants';
import { BoardInfo } from '@store/boards/types';
import { doc, setDoc } from 'firebase/firestore';

export const addColumnToBoard = async ({ id, columns }: Pick<BoardInfo, 'columns' | 'id'>) => {
  try {
    const batchPromises = columns?.map((column) =>
      setDoc(doc(db, BOARDS_DB_NAME, id, 'columns', column.id), column),
    );

    if (batchPromises) await Promise.all(batchPromises);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
