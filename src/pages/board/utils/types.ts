import { PERMISSIONS } from '@constants';

export type PermissionType = keyof typeof PERMISSIONS.boards | keyof typeof PERMISSIONS.tasks;
