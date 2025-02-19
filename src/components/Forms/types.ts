import { PropsWithChildren } from 'react';

export interface FormSubmit {
  result: string;
  error?: string;
}

export interface AuthFormWrapperProps<TFormValue, TFuncReturns extends FormSubmit>
  extends PropsWithChildren {
  name: string;
  authFunction: (props: TFormValue) => Promise<TFuncReturns>;
}
