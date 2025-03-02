import { CrownTwoTone, TeamOutlined, UserOutlined } from '@ant-design/icons';

export const PERMISSIONS = Object.freeze({
  boards: Object.freeze({
    edit: 'can_edit_boards',
    select_template: 'can_select_board_template',
    invite_users: 'can_invite_users',
    view: 'can_view_board',
  }),
  tasks: Object.freeze({
    create: 'can_create_tasks',
    edit: 'can_edit_tasks',
    assign_users: 'can_assign_users',
    move: 'can_move_tasks',
  }),
});

export enum ROLES {
  OWNER = 'owner',
  MEMBER = 'member',
  GUEST = 'guest',
}

export const ROLES_PERMISSIONS = Object.freeze({
  [ROLES.OWNER]: {
    permissions: [...Object.values(PERMISSIONS.boards), ...Object.values(PERMISSIONS.tasks)],
    label: 'Owner',
    color: 'rgba(255, 215, 0, 1)',
    icon: CrownTwoTone,
  },
  [ROLES.MEMBER]: {
    permissions: [
      PERMISSIONS.boards.view,
      PERMISSIONS.tasks.create,
      PERMISSIONS.tasks.edit,
      PERMISSIONS.tasks.move,
    ],
    color: 'rgba(230, 230, 250, 0.9)',
    label: 'Member',
    icon: TeamOutlined,
  },
  [ROLES.GUEST]: {
    permissions: [PERMISSIONS.boards.view],
    label: 'Guest',
    color: 'gray',
    icon: UserOutlined,
  },
});

export type ROLES_VALUES = (typeof ROLES)[keyof typeof ROLES];
