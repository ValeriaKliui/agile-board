import { USERS_COLLECTION_NAME } from '@constants';
import { TemplateSelector } from '@pages/home/components';
import { MembersSearch, } from '@shared/components';
import { getCollection } from '@shared/services';
import { User } from '@store';
import { Form, Input, } from 'antd';
import { useCallback, } from 'react';

const { Item } = Form;

export const BasicBoardInfo = () => {
  const searchUser = useCallback(
    (searchTerm: string) =>
      getCollection<User>({
        collectionPaths: [USERS_COLLECTION_NAME],
        searchKey: 'username',
        searchTerm,
      }),
    [],
  );

  return (
    <>
      <Item name="title">
        <Input placeholder="My board" />
      </Item>
      <TemplateSelector />
      <MembersSearch fetchFunc={searchUser} name={'selectedMembers'} />
    </>
  );
};
