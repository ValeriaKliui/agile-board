import { USERS_DB_NAME } from '@constants';
import { SearchedSelect } from '@pages/home/components';
import { fetchDataWithParams } from '@services/firebase';
import { useDebouncedFetch } from '@shared/hooks';
import { User } from '@store/user';
import { useCallback } from 'react';

export const MembersSearch = () => {
  const fetchFunc = useCallback(
    (searchTerm: string) =>
      fetchDataWithParams<User>({ collectionName: USERS_DB_NAME, searchKey: 'username', searchTerm }),
    [],
  );

  const {
    debounceFetcher: fetchSearchFunc,
    result,
    isFetching,
  } = useDebouncedFetch<{ documents: User[] }>({ fetchFunc });

  console.log(result?.documents)
  const options = result?.documents?.map(({ username, userID }: User) => {
    return {
      label: username,
      value: userID,
    }
  });

  const safeFetchSearchFunc = (searchTerm: string) => {
    return fetchSearchFunc(searchTerm) ?? Promise.resolve();
  };

  return (
    <SearchedSelect
      placeholder="Select users"
      label="Select Members"
      name="membersChoosen"
      isFetching={isFetching}
      fetchOptions={safeFetchSearchFunc}
      options={options}
    />
  );
};
