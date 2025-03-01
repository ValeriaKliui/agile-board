import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME, TASKS_COLLECTION_NAME } from '@constants';
import { formatDatetime, setData } from '@shared/services';

import { AddTaskParams, TaskInitial } from './types';

const formatTaskDates = (task: TaskInitial, createdAt: Date) => ({
  ...task,
  executionDate: formatDatetime({ timestamp: task.executionDate }),
  createdAt: formatDatetime({ timestamp: createdAt }),
});

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

    return formatTaskDates({ ...task, taskID }, createdAt);
  } catch (error) {
    console.error('Error adding task:', error);
    throw new Error(
      `Failed to add task: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
