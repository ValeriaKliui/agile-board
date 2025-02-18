import { RegisterParams } from '@store/auth/interfaces';
import { createUserWithEmailAndPassword, User } from 'firebase/auth';

import { handleAuthError } from './handleAuthError';
import { REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES } from './interfaces';
import { auth } from '@config/firebase';
import { createUserAccount } from '@utils/firebase/auth/createUserAccount';

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
