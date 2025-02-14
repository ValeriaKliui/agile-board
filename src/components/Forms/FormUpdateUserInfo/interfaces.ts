export interface FormUpdateUserInfoProps<TForm, TFormValues> {
  onFormSubmit: (values: TFormValues) => void;
  isLoading: boolean;
  form: TForm;
  fields: string[];
}
