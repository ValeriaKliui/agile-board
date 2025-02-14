export interface AuthFormPropsDefault<TFormValues, TForm> {
  form: TForm;
  onFormSubmit: (values: TFormValues) => void;
  onFormChange: () => void;
  error: string | null;
  isLoading: boolean;
}
