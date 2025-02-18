export const PERMISSIONS = Object.freeze({
  boards: Object.freeze({
    edit: 'can_edit_boards',
    delete: 'can_delete_boards',
    select_template: 'can_select_board_template',
    invite_users: 'can_invite_users',
    view: 'can_view_board',
  }),
  tasks: Object.freeze({
    create: 'can_create_tasks',
    edit: 'can_edit_tasks',
    delete: 'can_delete_tasks',
    assign_users: 'can_assign_users',
    move: 'can_move_tasks',
  }),
});

export enum ROLES {
  OWNER = 'owner',
  MEMBER = 'member',
  GUEST = 'guest',
}

export const ROLES_PERMISSIONS = {
  [ROLES.OWNER]: {
    permissions: [...Object.values(PERMISSIONS.boards), ...Object.values(PERMISSIONS.tasks)],
    label: 'Owner',
    color: 'red',
  },
  [ROLES.MEMBER]: {
    permissions: [
      PERMISSIONS.boards.view,
      PERMISSIONS.tasks.create,
      PERMISSIONS.tasks.edit,
      PERMISSIONS.tasks.move,
    ],
    label: 'Member',
    color: 'blue',
  },
  [ROLES.GUEST]: {
    permissions: [PERMISSIONS.boards.view],
    label: 'Guest',
    color: 'gray',
  },
};

// const currRole = 'guest';

// const hasPermission = ({ role, permission }) => {
//   const permissionExists = ROLES[role].permissions?.includes(
//     (per) => permission === per
//   );
//   return !!permissionExists;
// };

// console.log(
//   hasPermission({
//     role: currRole,
//     permission: PERMISSIONS.boards.edit,
//   })
// );
