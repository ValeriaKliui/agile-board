export interface UpdateUserInfoFormProps<TForm, TFormValues> {
  onFormSubmit: (values: TFormValues) => void;
  isLoading: boolean;
  form: TForm;
  fields: string[];
}
