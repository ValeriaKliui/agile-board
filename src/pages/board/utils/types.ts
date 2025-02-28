import { PERMISSIONS } from '@constants';

export type PermissionType =
  | (typeof PERMISSIONS.boards)[keyof typeof PERMISSIONS.boards]
  | (typeof PERMISSIONS.tasks)[keyof typeof PERMISSIONS.tasks];
