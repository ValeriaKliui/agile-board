import { Option } from '@shared/types';

export interface TaskCreatorFormProps<TFormValues, TForm> {
  form: TForm;
  onFinish: (values: TFormValues) => void;
  membersOptions: Option[];
  priorityOptions: Option[];
}
