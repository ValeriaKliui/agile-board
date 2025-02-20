import { auth } from '@config';
import { createUserAccount } from '@services/firebase';
import { handleAuthError } from '@shared/utils';
import { RegisterParams } from '@store/auth';
import { createUserWithEmailAndPassword, User } from 'firebase/auth';

import { REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES } from './types';

export const registerUser = async ({
  email,
  password,
  username,
}: RegisterParams): Promise<User> => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await createUserAccount({
      userID: user.uid,
      email,
      username,
    });

    return user;
  } catch (error) {
    const errorMessage = handleAuthError(error, REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES);
    throw new Error(errorMessage || 'An unexpected error occurred during registration.');
  }
};
