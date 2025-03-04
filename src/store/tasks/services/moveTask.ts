import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME, TASKS_COLLECTION_NAME } from '@constants';
import { moveDocument } from '@shared/services';
import { MoveTask } from '@store';

export const moveTask = async ({ boardID, columnID, taskID, newColumnID }: MoveTask) => {
  await moveDocument({
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
};
