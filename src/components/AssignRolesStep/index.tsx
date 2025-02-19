import { ROLES } from '@constants/roles';
import { MembersRolesAssigning } from '@containers/MembersRolesAssigning';
import { transformObjectToOptions } from '@utils/common';

export const AssignRolesStep = ({ members }) => {
  const roles = transformObjectToOptions(ROLES)
    .filter(({ value }) => {
      return value !== ROLES.OWNER;
    })
    .map(({ value, label }) => ({ value, label: label.toLowerCase() }));

  return <MembersRolesAssigning members={members} roles={roles} />;
};
