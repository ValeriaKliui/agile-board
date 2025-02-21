import { FormInstance } from 'antd';

export interface UpdateUserInfoFormProps<
  TForm extends FormInstance<TFormValues> | undefined,
  TFormValues,
> {
  onSubmit: (values: TFormValues) => void;
  isLoading: boolean;
  form: TForm;
  fields: string[];
}
