export interface UpdatePasswordFormProps<TForm, TFormValues> {
  onSubmit: (values: TFormValues) => void;
  error: string | null;
  form: TForm;
}
