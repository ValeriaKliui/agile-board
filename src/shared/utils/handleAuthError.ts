import { getErrorMessage } from '@shared/utils/getErrorMessage';

export interface ErrorMessageProps<TErrors extends EnumType, TErrorsMessages extends EnumType> {
  errors: TErrors;
  errorsMessages: TErrorsMessages;
  errorCode: string;
}

export type EnumType = Record<string, string | number>;

export const handleAuthError = (
  error: unknown,
  errors: EnumType,
  errorsMessages: EnumType,
): string | undefined => {
  if (!(error instanceof Error)) return undefined;

  const authError = error as AuthError;

  return (
    getErrorMessage({ errors, errorsMessages, errorCode: authError.code }) ||
    'An unknown error occurred.'
  );
};
