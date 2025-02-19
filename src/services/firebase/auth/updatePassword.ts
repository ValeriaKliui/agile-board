import { auth } from '@config/firebase';
import { handleAuthError } from '@services/firebase/auth/handleAuthError';
import {
  UPDATE_PASSWORD_ERRORS,
  UPDATE_PASSWORD_ERRORS_MESSAGES,
} from '@services/firebase/auth/types';
import { UpdatePasswordProps } from '@store/auth/types';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword as updatePasswordAuth,
} from 'firebase/auth';

export const updatePassword = async ({ newPassword, oldPassword }: UpdatePasswordProps) => {
  try {
    const user = auth.currentUser;

    if (user && user.email) {
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      if (user) await reauthenticateWithCredential(user, credential);

      await updatePasswordAuth(user, newPassword);
    }
  } catch (error) {
    const errorMessage = handleAuthError(
      error,
      UPDATE_PASSWORD_ERRORS,
      UPDATE_PASSWORD_ERRORS_MESSAGES,
    );
    throw new Error(errorMessage || 'An unexpected error occurred while resetting the password.');
  }
};
