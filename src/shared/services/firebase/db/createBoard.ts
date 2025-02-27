import { BOARDS_COLLECTION_NAME, BOARDS_TEMPLATE_DB_NAME } from '@constants';
import { getCollection, setData } from '@shared/services/firebase';
import { BoardCreationInfo } from '@store/boards/types';

export const createBoard = async ({ title, owner, members, template }: BoardCreationInfo) => {
  let boardID;
  if (template && template !== 'custom') {
    boardID = await setData(BOARDS_COLLECTION_NAME, null, {
      title,
      createdAt: new Date(),
      owner,
      members,
      columns: await getCollection([BOARDS_TEMPLATE_DB_NAME, template, 'columns']),
    });
  } else
    boardID = await setData(BOARDS_COLLECTION_NAME, null, {
      title,
      createdAt: new Date(),
      owner,
      members,
    });

  return boardID;
};
