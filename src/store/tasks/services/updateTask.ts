import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { updateData } from '@shared/services';
import { UpdateTaskParams } from 'store/tasks/services/types';

export const updateTask = async ({ boardID, columnID, taskID, ...task }: UpdateTaskParams) => {
  try {
    await updateData({
      collectionPaths: [
        BOARDS_COLLECTION_NAME,
        boardID,
        COLUMNS_COLLECTION_NAME,
        columnID,
        'tasks',
        taskID,
      ],
      data: task,
    });
  } catch (error) {
    console.error('Error adding task:', error);
    throw new Error(
      `Failed to update task: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
