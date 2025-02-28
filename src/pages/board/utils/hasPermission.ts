import { ROLES_PERMISSIONS } from '@shared/constants';
import { boardStore } from '@store';

import { PermissionType } from './types';

export const hasPermission = ({ permission }: { permission: PermissionType }) => {
  const currentRole = boardStore.currentRole;

  if (currentRole) {
    const rolePermissions = ROLES_PERMISSIONS[currentRole]?.permissions || [];
    return rolePermissions.includes(permission);
  }

  return false;
};
