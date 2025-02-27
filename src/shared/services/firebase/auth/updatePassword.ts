import { auth } from '@config';
import { UPDATE_PASSWORD_ERRORS, UPDATE_PASSWORD_ERRORS_MESSAGES } from '@shared/services/firebase';
import { handleAuthError } from '@shared/utils';
import { UpdatePasswordProps } from '@store/auth';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword as updatePasswordAuth,
} from 'firebase/auth';

export const updatePassword = async ({ newPassword, oldPassword }: UpdatePasswordProps) => {
  try {
    const user = auth?.currentUser;

    if (!user || !user.email) {
      throw new Error('User not authenticated or missing email.');
    }
    const credential = EmailAuthProvider.credential(user.email, oldPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePasswordAuth(user, newPassword);

  } catch (error) {
     const errorMessage = handleAuthError(error, UPDATE_PASSWORD_ERRORS, UPDATE_PASSWORD_ERRORS_MESSAGES) || 'An unexpected error occurred while resetting the password.';
    console.error('Password update error:', errorMessage);
    throw new Error(errorMessage);  
  }
};
