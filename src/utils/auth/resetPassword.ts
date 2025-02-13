import { handleAuthError } from "@utils/auth/handleAuthError";
import {
  AuthUserProps,
  REGISTER_ERRORS_MESSAGES,
  RESET_PASSWORD_ERRORS,
} from "@utils/auth/interfaces";
import { sendPasswordResetEmail } from "firebase/auth";

export const resetPassword = async ({ auth, email }: AuthUserProps) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { result: "success" };
  } catch (error) {
    return handleAuthError(
      error,
      RESET_PASSWORD_ERRORS,
      REGISTER_ERRORS_MESSAGES,
    );
  }
};
