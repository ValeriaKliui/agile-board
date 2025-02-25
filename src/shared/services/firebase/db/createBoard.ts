import { BOARDS_DB_NAME, BOARDS_TEMPLATE_DB_NAME } from '@constants';
import { addColumnToBoard, getCollection, setData } from '@shared/services/firebase';
import { BoardCreationInfo, Column } from '@store/boards/types';

export const createBoard = async ({ title, owner, members, template }: BoardCreationInfo) => {
  const id = await setData(BOARDS_DB_NAME, null, {
    title,
    createdAt: new Date(),
    owner,
    members,
  });

  if (template) {
    const columns = await getCollection<Column>([BOARDS_TEMPLATE_DB_NAME, template, 'columns']);
    if (columns && id) addColumnToBoard({ id, columns });
  }

  return id;
};
