import { FormInstance } from 'antd';

export interface UpdateUserInfoFormProps<
  TForm extends FormInstance<TFormValues> | undefined,
  TFormValues,
> {
  onFormSubmit: (values: TFormValues) => void;
  isLoading: boolean;
  form: TForm;
  fields: string[];
}
