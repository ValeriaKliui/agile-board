import { RegisterParams } from "@store/auth/interfaces";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { handleAuthError } from "./handleAuthError";
import { REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES } from "./interfaces";

export const registerUser = async ({
  auth,
  email,
  password,
}: RegisterParams) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw Error(
      handleAuthError(error, REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES),
    );
  }
};
