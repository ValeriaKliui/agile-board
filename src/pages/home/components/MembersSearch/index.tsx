import { USERS_DB_NAME } from '@constants';
import { SearchedSelect } from '@pages/home/components';
import { fetchDataWithParams } from '@services/firebase';
import { useDebouncedFetch } from '@shared/hooks';
import { Spin } from 'antd';
import { User } from 'firebase/auth';
import { useCallback } from 'react';

export const MembersSearch = () => {
  const fetchFunc = useCallback(
    (searchTerm: string) =>
      fetchDataWithParams<User>({ dbName: USERS_DB_NAME, searchKey: 'username', searchTerm }),
    [],
  );

  const {
    debounceFetcher: fetchSearchFunc,
    result,
    isFetching,
  } = useDebouncedFetch<{ documents: User[] }>({ fetchFunc });

  const options =
    result?.documents?.map(({ username }) => ({
      label: username,
      value: username,
    })) ?? [];

  const notFoundContent = isFetching ? <Spin size="small" /> : null;

  return (
    <SearchedSelect
      placeholder="Select users"
      label="Select Members"
      name="membersChoosen"
      fetchSearchFunc={fetchSearchFunc}
      notFoundContent={notFoundContent}
      options={options}
    />
  );
};
