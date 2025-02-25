import { ROLES_PERMISSIONS } from '@constants';
import { boardsStore } from '@store/boards';

import { PermissionType } from './types';

export const hasPermission = ({ permission }: { permission: PermissionType }) => {
  const currentRole = boardsStore.currentRole;

  if (currentRole) {
    const rolePermissions = ROLES_PERMISSIONS[currentRole]?.permissions || [];
    return rolePermissions.includes(permission);
  }

  return false;
};
