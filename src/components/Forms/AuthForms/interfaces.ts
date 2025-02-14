export interface AuthFormPropsDefault<T> {
  onFormSubmit: (values: T) => void;
  onFormChange: () => void;
  error: string | null;
  isLoading: boolean;
}
