import { LoginParams } from "@store/auth/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";

import { handleAuthError } from "./handleAuthError";
import { LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES } from "./interfaces";

export const loginUser = async ({ auth, email, password }: LoginParams) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw Error(handleAuthError(error, LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES));
  }
};
