import { TaskWithUser } from '@pages/board/components';
import { Option } from '@shared/types';

export interface TaskEditorFormFormProps<TForm, TFormValues>
  extends Pick<TaskWithUser, 'title' | 'description' | 'assignedTo' | 'priority'> {
  onSubmit: (values: TFormValues) => void;
  form: TForm;
  disabled: boolean;
  isUpdating: boolean;
  membersOptions?: Option[];
}
