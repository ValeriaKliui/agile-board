import { ROLES } from '@constants';
import { MembersRolesList } from '@pages/home/components';
import { transformObjectToOptions } from '@pages/home/utils';

import { MembersRolesAssigningProps } from './types';

export const MembersRolesAssigning = ({ members }: MembersRolesAssigningProps) => {
  const roles = transformObjectToOptions(ROLES)
    .filter(({ value }) => {
      return value !== ROLES.OWNER;
    })
    .map(({ value, label }) => ({ value, label: label.toLowerCase(), key: value }));

  return <MembersRolesList members={members} roles={roles} />;
};
