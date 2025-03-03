import { BOARDS_TEMPLATE_COLLECTION_NAME } from '@constants';
import { Template } from '@pages/home/components';
import { getCollection } from '@shared/services';

export const fetchTemplates = async () => {
  const templates = await getCollection<Template>({
    collectionPaths: [BOARDS_TEMPLATE_COLLECTION_NAME],
  });
  return templates;
};
