import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME, TASKS_COLLECTION_NAME } from '@constants';
import { updateData } from '@shared/services';
import { UpdateTaskParams } from '@store';

export const updateTask = async ({ boardID, columnID, taskID, ...task }: UpdateTaskParams) => {
  try {
    await updateData({
      collectionPaths: [
        BOARDS_COLLECTION_NAME,
        boardID,
        COLUMNS_COLLECTION_NAME,
        columnID,
        TASKS_COLLECTION_NAME,
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
