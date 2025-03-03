import { ROLES_PERMISSIONS } from '@shared/constants';
import { BoardInfo, getUsersByIDs } from '@store';

export const fetchMembersData = async ({ members }: Pick<BoardInfo, 'members'>) => {
  try {
    const membersData = await getUsersByIDs({ IDs: Object.keys(members) });

    const membersWithRoles = membersData?.map((user) => {
      const role = members[user.userID];
      return {
        ...user,
        role,
        color: ROLES_PERMISSIONS[role]?.color,
      };
    });

    return membersWithRoles;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error fetching members info: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
