import { ROLES_PERMISSIONS } from '@constants';

import { PermissionType } from './types';
import { boardsStore } from '@store/boards';

export const hasPermission = ({ permission }: { permission: PermissionType }) => {
  const currentRole = boardsStore.currentRole;
  const rolePermissions = ROLES_PERMISSIONS[currentRole]?.permissions || [];
  return rolePermissions.includes(permission);
};
