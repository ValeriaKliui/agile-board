import user from "@store/user";
import { handleAuthError } from "@utils/auth/handleAuthError";
import {
  AuthUserProps,
  AuthUserReturns,
  LOGIN_ERRORS,
  LOGIN_ERRORS_MESSAGES,
} from "@utils/auth/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async ({
  auth,
  email,
  password,
}: AuthUserProps): Promise<AuthUserReturns> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    user.setUID(userCredential.user.uid);

    return { result: "success", user: userCredential.user };
  } catch (error) {
    return handleAuthError(error, LOGIN_ERRORS, LOGIN_ERRORS_MESSAGES);
  }
};
