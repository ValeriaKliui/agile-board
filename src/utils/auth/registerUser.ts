import {
  AuthUserProps,
  AuthUserReturns,
  REGISTER_ERRORS,
  REGISTER_ERRORS_MESSAGES,
} from "@utils/auth/types";
import { getErrorMessage } from "@utils/index";
import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

const auth = getAuth();

export const registerUser = async ({
  email,
  password,
}: AuthUserProps): Promise<AuthUserReturns> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await auth.signOut();

    return { result: "success", user: userCredential.user };
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { code } = error as AuthError;

      const errorMessage = getErrorMessage({
        errors: REGISTER_ERRORS,
        errorsMessages: REGISTER_ERRORS_MESSAGES,
        errorCode: code,
      });

      return {
        result: "error",
        error: errorMessage,
      };
    }
  }
  return { result: "error", error: "Unknown error" };
};
