import { auth } from "@config/firebase";
import { handleAuthError } from "@utils/auth/handleAuthError";
import {
  AuthUserProps,
  AuthUserReturns,
  LOGIN_ERRORS,
  LOGIN_ERRORS_MESSAGES,
} from "@utils/auth/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async ({
  email,
  password,
}: AuthUserProps): Promise<AuthUserReturns> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { result: "success", user: userCredential.user };
  } catch (error) {
    return handleAuthError(error, LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES);
  }
};
