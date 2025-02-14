import { ForgotPasswordParams } from "@store/auth/interfaces";
import { handleAuthError } from "@utils/auth/handleAuthError";
import {
  REGISTER_ERRORS_MESSAGES,
  RESET_PASSWORD_ERRORS,
} from "@utils/auth/interfaces";
import { sendPasswordResetEmail } from "firebase/auth";

export const resetPassword = async ({ auth, email }: ForgotPasswordParams) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw Error(
      handleAuthError(error, RESET_PASSWORD_ERRORS, REGISTER_ERRORS_MESSAGES),
    );
  }
};
