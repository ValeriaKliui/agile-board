import { BOARDS_TEMPLATE_COLLECTION_NAME, USERS_COLLECTION_NAME } from '@constants';
import { MembersSearch } from '@pages/home/components';
import { fetchDataWithParams } from '@pages/home/services';
import { RadioGroup } from '@shared/components';
import { getCollection } from '@shared/services/firebase';
import { User } from '@store';
import { Flex, Form, Input, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';

import { Template } from './types';

const { Item } = Form;
const { Text } = Typography;

export const BasicBoardInfo = () => {
  const [templates, setTemplates] = useState<Template[]>([]);

  const templateOptions = templates?.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  const fetchFunc = useCallback(
    (searchTerm: string) =>
      fetchDataWithParams<User>({ collectionName: USERS_COLLECTION_NAME, searchKey: 'username', searchTerm }),
    [],
  );

  useEffect(() => {
    const fetchTemplates = async () => {
      const templates = await getCollection<Template>([BOARDS_TEMPLATE_COLLECTION_NAME]);
      if (templates) setTemplates([{ id: 'custom', title: 'Custom' }, ...templates]);
    };

    fetchTemplates();
  }, []);

  return (
    <>
      <Item name="title">
        <Input placeholder="My board" />
      </Item>
      <Flex vertical gap={'small'}>
        <Text strong>Template</Text>
        <Item name="template">
          <RadioGroup options={templateOptions} />
        </Item>
      </Flex>
      <MembersSearch fetchFunc={fetchFunc} name={'membersChoosen'} />
    </>
  );
};
