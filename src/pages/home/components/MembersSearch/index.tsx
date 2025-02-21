import { USERS_DB_NAME } from '@constants';
import { SearchedSelect } from '@pages/home/components';
import { fetchDataWithParams } from '@services/firebase';
import { useDebouncedFetch } from '@shared/hooks';
import { User } from '@store/user';
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

  const options = result?.documents?.map(({ username }: User) => ({
    label: username,
    value: username,
  }));

  const safeFetchSearchFunc = (searchTerm: string) => {
    return fetchSearchFunc(searchTerm) ?? Promise.resolve();
  };

  return (
    <SearchedSelect
      placeholder="Select users"
      label="Select Members"
      name="membersChoosen"
      isFetching={isFetching}
      fetchSearchFunc={safeFetchSearchFunc}
      options={options}
    />
  );
};
