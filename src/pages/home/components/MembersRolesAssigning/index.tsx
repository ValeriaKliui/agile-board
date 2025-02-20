import { ROLES } from '@constants';
import { MembersRolesList } from '@pages/home/components';
import { transformObjectToOptions } from '@pages/home/utils';

export const MembersRolesAssigning = ({ members }) => {
  const roles = transformObjectToOptions(ROLES)
    .filter(({ value }) => {
      return value !== ROLES.OWNER;
    })
    .map(({ value, label }) => ({ value, label: label.toLowerCase() }));

  return <MembersRolesList members={members} roles={roles} />;
};
