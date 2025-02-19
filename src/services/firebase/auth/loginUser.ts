import { LoginParams } from '@store/auth/types';
import { signInWithEmailAndPassword, User } from 'firebase/auth';

import { handleAuthError } from './handleAuthError';
import { LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES } from './types';
import { auth } from '@config/firebase';

export const loginUser = async ({ email, password }: LoginParams): Promise<User> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    const errorMessage = handleAuthError(error, LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES);
    throw new Error(errorMessage || 'An unexpected error occurred during login.');
  }
};
