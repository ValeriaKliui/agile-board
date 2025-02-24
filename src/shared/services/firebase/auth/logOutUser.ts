import { auth } from '@config';
import { handleAuthError } from '@shared/utils';
import { signOut } from 'firebase/auth';

import { SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES } from './types';

export const logOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorMessage = handleAuthError(error, SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES);
    throw new Error(errorMessage || 'An unexpected error occurred during logout.');
  }
};
