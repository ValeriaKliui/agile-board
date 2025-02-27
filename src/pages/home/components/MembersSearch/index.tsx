import { USERS_COLLECTION_NAME } from '@constants';
import { SearchedSelect } from '@pages/home/components';
import { fetchDataWithParams } from '@pages/home/services';
import { useDebouncedFetch } from '@shared/hooks';
import { User } from '@store/user';
import { useCallback } from 'react';

export const MembersSearch = () => {
  const fetchFunc = useCallback(
    (searchTerm: string) =>
      fetchDataWithParams<User>({
        collectionName: USERS_COLLECTION_NAME,
        searchKey: 'username',
        searchTerm,
      }),
    [],
  );

  const {
    debounceFetcher: fetchSearchFunc,
    result,
    isFetching,
  } = useDebouncedFetch<{ documents: User[] }>({ fetchFunc });

  const options = result?.documents?.map(({ username, userID }: User) => ({
    label: username,
    value: userID,
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
      fetchOptions={safeFetchSearchFunc}
      options={options}
    />
  );
};
