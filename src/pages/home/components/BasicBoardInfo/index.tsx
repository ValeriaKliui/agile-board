import { BOARDS_TEMPLATE_DB_NAME } from '@constants';
import { MembersSearch } from '@pages/home/components';
import { RadioGroup } from '@shared/components';
import { getCollection } from '@shared/services/firebase';
import { Flex, Form, Input, Typography } from 'antd';
import { useEffect, useState } from 'react';

import { Template } from './types';

const { Item } = Form;
const { Text } = Typography

export const BasicBoardInfo = () => {
  const [templates, setTemplates] = useState<Template[]>([])

  const templateOptions = templates?.map(({ id, title }) => ({
    value: id,
    label: title
  }))

  useEffect(() => {
    const fetchTemplates = async () => {
      const templates = await getCollection<Template>([BOARDS_TEMPLATE_DB_NAME])
      if (templates) setTemplates([{ id: 'custom', title: 'Custom' }, ...templates,])
    }

    fetchTemplates()
  }, [])

  return (
    <>
      <Item name="title">
        <Input placeholder="My board" />
      </Item>
      <Flex vertical gap={'small'}>
        <Text strong>Template</Text>
        <Item name='template' >
          <RadioGroup options={templateOptions} />
        </Item>
      </Flex>
      <MembersSearch />
    </>
  );
};
