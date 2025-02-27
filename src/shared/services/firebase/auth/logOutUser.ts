import { auth } from '@config';
import { handleAuthError } from '@shared/utils';
import { signOut } from 'firebase/auth';

import { SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES } from './types';

export const logOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorMessage = handleAuthError(error, SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES) || 'An unexpected error occurred during logout.';
    console.error('Logout error:', errorMessage);
    throw new Error(errorMessage); 
  }
};
