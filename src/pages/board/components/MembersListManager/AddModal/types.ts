import { ROLES } from '@shared/constants';
import { MemberRoleType } from '@shared/types';

export interface MembersFormValues {
  selectedMembers: MemberRoleType[];
  members: { [user: string]: ROLES };
}
