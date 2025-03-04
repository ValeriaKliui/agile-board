import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME, TASKS_COLLECTION_NAME } from '@constants';
import { setData } from '@shared/services';

import { AddTaskParams } from './types';

export const addTask = async ({ boardID, columnID, task }: AddTaskParams) => {
  try {
    const createdAt = new Date();
    const taskWithDates = { ...task, createdAt };

    const taskID = await setData({
      collectionPaths: [
        BOARDS_COLLECTION_NAME,
        boardID,
        COLUMNS_COLLECTION_NAME,
        columnID,
        TASKS_COLLECTION_NAME,
      ],
      data: taskWithDates,
    });
    if (!taskID) throw new Error('Task wasn’t created in Firestore');

    return { ...taskWithDates, taskID };
  } catch (error) {
    console.error('Error adding task:', error);
    throw new Error(
      `Failed to add task: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
