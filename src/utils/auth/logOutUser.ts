import { AuthParams } from "@store/auth/interfaces";
import { signOut } from "firebase/auth";

import { handleAuthError } from "./handleAuthError";
import { SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES } from "./interfaces";

export const logOutUser = async ({ auth }: AuthParams) => {
  try {
    await signOut(auth);
  } catch (error) {
    throw Error(
      handleAuthError(error, SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES)
    );
  }
};
