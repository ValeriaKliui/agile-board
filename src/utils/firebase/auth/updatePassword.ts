import { auth } from "@config/firebase";
import { handleAuthError } from "@utils/firebase/auth/handleAuthError";
import {
  UPDATE_PASSWORD_ERRORS,
  UPDATE_PASSWORD_ERRORS_MESSAGES,
} from "@utils/firebase/auth/interfaces";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword as updatePasswordAuth,
} from "firebase/auth";

export const updatePassword = async ({ newPassword, oldPassword }) => {
  try {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user?.email, oldPassword);
    if (user) await reauthenticateWithCredential(user, credential);

    await updatePasswordAuth(user, newPassword);
  } catch (error) {
    const errorMessage = handleAuthError(
      error,
      UPDATE_PASSWORD_ERRORS,
      UPDATE_PASSWORD_ERRORS_MESSAGES,
    );
    throw new Error(
      errorMessage ||
        "An unexpected error occurred while resetting the password.",
    );
  }
};
