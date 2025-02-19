import { auth } from '@config';
import {
  handleAuthError,
  UPDATE_PASSWORD_ERRORS,
  UPDATE_PASSWORD_ERRORS_MESSAGES,
} from '@services/firebase';
import { UpdatePasswordProps } from '@store/auth';
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
