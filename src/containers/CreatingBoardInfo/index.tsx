import { DebounceSelect } from '@components/DebounceSelect';
import { USERS_DB_NAME } from '@constants/common';
import { fetchPaginatedData } from '@services/firebase/db/fetchPaginatedData';
import { User } from '@store/user/interfaces';
import { Input, Form } from 'antd';
import { useState } from 'react';
const { Item } = Form;

export const CreatingBoardInfo = () => {
  const [choosenUsers, chooseUsers] = useState<User[]>([]);

  const fetchSearchedUsers = async (searchTerm: string) => {
    return fetchPaginatedData({ dbName: USERS_DB_NAME, searchKey: 'username', searchTerm }).then(
      (body) =>
        body.documents.map(({ username }) => {
          return {
            label: username,
            value: username,
          };
        }),
    );
  };

  return (
    <>
      <Item name="title" required>
        <Input placeholder="My board" />
      </Item>

      <Item name="membersChoosen" label="Select Members">
        <DebounceSelect
          mode="multiple"
          value={choosenUsers}
          placeholder="Select users"
          fetchFunc={fetchSearchedUsers}
          onChange={(newValue) => {
            chooseUsers(newValue as User[]);
          }}
        />
      </Item>
    </>
  );
};
