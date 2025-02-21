import { ReactNode } from 'react';

export interface AuthFormPropsDefault<TFormValues, TForm> {
  form: TForm;
  onSubmit: (values: TFormValues) => void;
  onChange: () => void;
  error: string | null;
  isLoading: boolean;
}

export interface DefaultTabInfo {
  link: string;
  key: string;
  label: string;
}
export interface ErrorMessageProps<TErrors extends EnumType, TErrorsMessages extends EnumType> {
  errors: TErrors;
  errorsMessages: TErrorsMessages;
  errorCode: string;
}

export type EnumType = Record<string, string | number>;

export interface StepType {
  title: string;
  content: ReactNode;
}
export interface MemberRoleType {
  label: string;
  value: string;
  key: string;
}
