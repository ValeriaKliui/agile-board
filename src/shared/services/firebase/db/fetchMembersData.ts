import { ROLES_PERMISSIONS } from '@shared/constants';
import { getUsersByIDs } from '@shared/services/firebase';

export const fetchMembersData = async ({ members }) => {
  const membersData = await getUsersByIDs({ IDs: Object.keys(members) });

  const membersWithRoles = membersData.map((user) => {
    const role = members[user.id];
    return {
      role,
      username: user.username,
      color: ROLES_PERMISSIONS[role]?.color,
      ...user,
    };
  });

  return membersWithRoles;
};
