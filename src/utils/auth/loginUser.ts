import {
  AuthUserProps,
  AuthUserReturns,
  LOGIN_ERRORS,
  LOGIN_ERRORS_MESSAGES,
} from '@utils/auth/types';
import { getErrorMessage } from '@utils/index';
import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = async ({
  auth,
  email,
  password,
}: AuthUserProps): Promise<AuthUserReturns> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return { result: 'success', user: userCredential.user };
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { code } = error as AuthError;

      console.log(code);
      const errorMessage = getErrorMessage({
        errors: LOGIN_ERRORS,
        errorsMessages: LOGIN_ERRORS_MESSAGES,
        errorCode: code,
      });

      return {
        result: 'error',
        error: errorMessage,
      };
    }
  }
  return { result: 'error', error: 'Unknown error' };
};
