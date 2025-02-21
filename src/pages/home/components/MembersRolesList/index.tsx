import { MembersRolesItem } from '@pages/home/components/MembersRolesItem';
import { VirtualList } from '@shared/components';

import { MembersRolesListProps } from './types';

export const MembersRolesList = ({ roles, members }: MembersRolesListProps) => {
  return (
    <VirtualList
      data={members}
      itemKey={'label'}
      onScroll={() => { }}
      renderItem={(item) => <MembersRolesItem roles={roles} item={item} />}
    />
  );
};
