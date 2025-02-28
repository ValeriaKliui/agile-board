import { auth } from '@config';
import { RESET_PASSWORD_ERRORS, RESET_PASSWORD_ERRORS_MESSAGES } from '@shared/services/firebase';
import { handleAuthError } from '@shared/utils';
import { ForgotPasswordParams } from '@store';
import { sendPasswordResetEmail } from 'firebase/auth';

export const resetPassword = async ({ email }: ForgotPasswordParams): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const errorMessage =
      handleAuthError(error, RESET_PASSWORD_ERRORS, RESET_PASSWORD_ERRORS_MESSAGES) ||
      'An unexpected error occurred while resetting the password.';
    console.error('Password reset error:', errorMessage);
    throw new Error(errorMessage);
  }
};
