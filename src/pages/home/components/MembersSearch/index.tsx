import { SearchedSelect } from '@pages/home/components';
import { useDebouncedFetch } from '@shared/hooks';
import { User } from '@store';

export const MembersSearch = ({ fetchFunc, name }) => {
  const {
    debounceFetcher: fetchSearchFunc,
    result: members,
    isFetching,
  } = useDebouncedFetch<
    User[]>({ fetchFunc });

  const options = members?.map(({ username, userID }: User) => ({
    label: username,
    value: userID,
  }));

  const safeFetchSearchFunc = (searchTerm: string) => {
    return fetchSearchFunc(searchTerm) ?? Promise.resolve();
  };

  return (
    <SearchedSelect
      name={name}
      placeholder="Select users"
      label="Select Members"
      isFetching={isFetching}
      fetchOptions={safeFetchSearchFunc}
      options={options}
    />
  );
};
