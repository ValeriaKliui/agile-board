import { BOARDS_TEMPLATE_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { getCollection } from '@shared/services';
import { BoardCreationInfo, Column } from '@store';

export const fetchTemplateBoard = async ({ template }: Pick<BoardCreationInfo, 'template'>) => {
  try {
    const columns = await getCollection<Column>({
      collectionPaths: [BOARDS_TEMPLATE_COLLECTION_NAME, template, COLUMNS_COLLECTION_NAME],
    });
    const columnsWithIDs = columns?.map(({ id: _, ...column }) => column) || [];

    return columnsWithIDs;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error fetching template: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
