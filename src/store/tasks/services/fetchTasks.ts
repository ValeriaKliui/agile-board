import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME, TASKS_COLLECTION_NAME } from '@constants';
import { formatDatetime, getCollection } from '@shared/services';
import { BoardInfo, Column, TaskResponse } from '@store';

export const fetchTasks = async ({
  boardID,
  columnID,
}: Pick<BoardInfo, 'boardID'> & Pick<Column, 'columnID'>) => {
  try {
    const tasks = await getCollection<TaskResponse>({
      collectionPaths: [
        BOARDS_COLLECTION_NAME,
        boardID,
        COLUMNS_COLLECTION_NAME,
        columnID,
        TASKS_COLLECTION_NAME,
      ],
    });
  

    return tasks?.map(({ id, createdAt, executionDate, ...task }) => {
      return {
        ...task,
        taskID: id,
        executionDate: formatDatetime({ timestamp: executionDate }),
        createdAt: formatDatetime({ timestamp: createdAt }),
      };
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
