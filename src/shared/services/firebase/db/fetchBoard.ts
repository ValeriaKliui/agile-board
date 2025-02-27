import { BOARDS_COLLECTION_NAME } from '@constants';
import { formatDatetime, getCollection, getData } from '@shared/services/firebase';
import { WithId } from '@shared/types';
import { sortArrByKey } from '@shared/utils';
import { BoardInfoResponse, Column } from '@store';

export const fetchBoard = async ({ id }: WithId) => {
  try {
    const board = await getData<BoardInfoResponse>(BOARDS_COLLECTION_NAME, id);
    const formattedData = formatDatetime({ timestamp: board?.createdAt });
    const columns = (await getCollection<Column>([BOARDS_COLLECTION_NAME, id, 'columns'])) ?? [];

    const columnsSorted = sortArrByKey(columns, 'order');

    return { ...board, createdAt: formattedData, columns: columnsSorted };
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
