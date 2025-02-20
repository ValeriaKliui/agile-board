import { EnumType } from '@shared/types';
import { getErrorMessage } from '@shared/utils/getErrorMessage';
import { AuthError } from 'firebase/auth';

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
