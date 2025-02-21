import { MemberRoleType } from '@shared/types';

export interface StepFormValues {
  membersChoosen: MemberRoleType[];
}
export interface CreatingBoardStepsFormModal<TForm> {
  stepForm: TForm;
}
