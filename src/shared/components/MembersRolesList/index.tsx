import { VirtualList } from '@shared/components';

import { MembersRolesItem } from './MembersRolesItem';
import { MembersRolesListProps } from './types';

export const MembersRolesList = ({ roles, members }: MembersRolesListProps) => {
  return (
    <VirtualList
      data={members}
      itemKey={'label'}
      renderItem={(item) => <MembersRolesItem roles={roles} item={item} />}
    />
  );
};
