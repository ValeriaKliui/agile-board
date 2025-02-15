import { signOut } from "firebase/auth";

import { handleAuthError } from "./handleAuthError";
import { SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES } from "./interfaces";
import { auth } from "@config/firebase";

export const logOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw Error(
      handleAuthError(error, SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES),
    );
  }
};
