import { auth } from '@config';
import { RESET_PASSWORD_ERRORS, RESET_PASSWORD_ERRORS_MESSAGES } from '@services/firebase';
import { handleAuthError } from '@shared/utils';
import { ForgotPasswordParams } from '@store/auth';
import { sendPasswordResetEmail } from 'firebase/auth';

export const resetPassword = async ({ email }: ForgotPasswordParams): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const errorMessage = handleAuthError(
      error,
      RESET_PASSWORD_ERRORS,
      RESET_PASSWORD_ERRORS_MESSAGES,
    );
    throw new Error(errorMessage || 'An unexpected error occurred while resetting the password.');
  }
};
