import { MemberRoleType } from '@shared/types';

export interface AddMembersFormProps<TForm, TFormValues> {
  onFinish: (values: TFormValues) => void;
  form: TForm;
  isAdding: boolean;
  onValuesChange: (formValues: TFormValues) => void;
  selectedMembers: MemberRoleType[];
}
