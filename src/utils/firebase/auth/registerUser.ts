import { RegisterParams } from "@store/auth/interfaces";
import { createUserWithEmailAndPassword, User } from "firebase/auth";

import { handleAuthError } from "./handleAuthError";
import { REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES } from "./interfaces";
import { auth } from "@config/firebase";
import { createUserAccount } from "@utils/firebase/auth/createUserAccount";

export const registerUser = async (userData: RegisterParams): Promise<User> => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    );
    await createUserAccount({ userID: user.uid, ...userData });

    return user;
  } catch (error) {
    const errorMessage = handleAuthError(
      error,
      REGISTER_ERRORS,
      REGISTER_ERRORS_MESSAGES,
    );
    throw new Error(
      errorMessage || "An unexpected error occurred during registration.",
    );
  }
};
