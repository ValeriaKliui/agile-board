export interface MemberRoleType {
  label: string;
  value: string;
}

export interface MembersRolesAssigningProps {
  members: MemberRoleType[];
  roles: MemberRoleType[];
}
