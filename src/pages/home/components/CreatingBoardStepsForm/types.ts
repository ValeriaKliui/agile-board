import { MemberRoleType } from '@shared/types';

export interface StepFormValues {
  membersChoosen: MemberRoleType[];
  title: string;
}
export interface CreatingBoardStepsFormModal<TForm> {
  stepForm: TForm;
}
