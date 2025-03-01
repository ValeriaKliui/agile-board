import { SearchedSelect } from '@shared/components';
import { useDebouncedFetch } from '@shared/hooks';
import { getMembersOptions } from '@shared/utils';
import { User } from '@store';

import { MembersSearchProps } from './types';

export const MembersSearch = ({ fetchFunc, name }: MembersSearchProps) => {
  const {
    debounceFetcher: fetchSearchFunc,
    result: members,
    isFetching,
  } = useDebouncedFetch<
    User[]>({ fetchFunc });

  const membersOptions = getMembersOptions(members)

  const safeFetchSearchFunc = (searchTerm: string) => {
    return fetchSearchFunc(searchTerm) ?? Promise.resolve();
  };

  return (
    <SearchedSelect
      name={name}
      onClick={() => fetchSearchFunc()}
      placeholder="Select users"
      label="Select Members"
      isFetching={isFetching}
      fetchOptions={safeFetchSearchFunc}
      options={membersOptions}
    />
  );
};
