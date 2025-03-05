import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME, TASKS_COLLECTION_NAME } from '@constants';
import { moveDocument } from '@shared/services';
import { MoveTask } from '@store';

export const moveTask = async ({ task, boardID, columnID, newColumnID }: MoveTask) => {
  try {
    if (!task) return;

    const taskID = task.taskID;
    await moveDocument({
      docData: task,
      collectionPaths: [
        BOARDS_COLLECTION_NAME,
        boardID,
        COLUMNS_COLLECTION_NAME,
        columnID,
        TASKS_COLLECTION_NAME,
        taskID,
      ],
      docID: taskID,
      targetCollectionPaths: [
        BOARDS_COLLECTION_NAME,
        boardID,
        COLUMNS_COLLECTION_NAME,
        newColumnID,
        TASKS_COLLECTION_NAME,
      ],
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
