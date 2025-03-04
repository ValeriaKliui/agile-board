import { USERS_COLLECTION_NAME } from '@constants';
import { TemplateSelector } from '@pages/home/components';
import { MembersSearch } from '@shared/components';
import { getCollection } from '@shared/services';
import { User, userStore } from '@store';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

const { Item } = Form;

export const BasicBoardInfo = observer(() => {
  const searchUser = useCallback((searchTerm?: string) => {
    const username = userStore.user?.username;

    return getCollection<User>({
      collectionPaths: [USERS_COLLECTION_NAME],
      searchKey: 'username',
      searchTerm,
      filterKey: 'username',
      filterValues: username ? [username] : null,
    });
  }, []);

  return (
    <>
      <Item name="title">
        <Input placeholder="My board" />
      </Item>
      <TemplateSelector />
      <MembersSearch fetchFunc={searchUser} name={'selectedMembers'} />
    </>
  );
});
