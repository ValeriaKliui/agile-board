import { auth } from '@config';
import { handleAuthError } from '@shared/utils';
import { LoginParams } from '@store/auth';
import { signInWithEmailAndPassword, User } from 'firebase/auth';

import { LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES } from './types';

export const loginUser = async ({ email, password }: LoginParams): Promise<User> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    const errorMessage = handleAuthError(error, LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES) || 'An unexpected error occurred during login.';
    console.error('Login error:', errorMessage);  
    throw new Error(errorMessage);  
  }
};
