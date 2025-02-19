import { signOut } from 'firebase/auth';

import { handleAuthError } from './handleAuthError';
import { SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES } from './interfaces';
import { auth } from '@config/firebase';

export const logOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorMessage = handleAuthError(error, SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES);
    throw new Error(errorMessage || 'An unexpected error occurred during logout.');
  }
};
