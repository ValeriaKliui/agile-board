export interface ColumnCreatorFormProps<TForm, TFormValues> {
  form: TForm;
  order: number;
  onFinish: (values: TFormValues) => void;
  isCreating: boolean;
}
