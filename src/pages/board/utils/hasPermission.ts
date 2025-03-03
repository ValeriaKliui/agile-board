import { ROLES_PERMISSIONS } from '@shared/constants';
import { boardStore } from '@store';

export const hasPermission = (permission: string) => {
  const currentRole = boardStore.currentRole;

  if (currentRole) {
    const rolePermissions = (ROLES_PERMISSIONS[currentRole]?.permissions || []) as string[];

    return rolePermissions.includes(permission);
  }

  return false;
};
