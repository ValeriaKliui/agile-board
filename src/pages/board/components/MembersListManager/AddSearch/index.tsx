import { fetchNewUsers } from '@pages/board/services';
import { MembersSearch } from '@shared/components';
import { boardStore } from '@store';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

export const AddSearchMembers = observer(() => {
  const { members } = boardStore.currentBoardInfo ?? {};

  const fetchNewMembers = useCallback(
    (searchTerm?: string) => fetchNewUsers(searchTerm, members),
    [members],
  );

  return <MembersSearch fetchFunc={fetchNewMembers} name="selectedMembers" />;
});
