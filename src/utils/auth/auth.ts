import { auth } from "@config/firebase";
import {
  AuthUserProps,
  AuthUserReturns,
  LOGIN_ERRORS,
  LOGIN_ERRORS_MESSAGES,
  REGISTER_ERRORS,
  REGISTER_ERRORS_MESSAGES,
  RESET_PASSWORD_ERRORS,
  SIGN_OUT_ERRORS,
  SIGN_OUT_ERRORS_MESSAGES,
} from "@utils/auth/types";
import { getErrorMessage } from "@utils/index";
import { EnumType } from "@utils/types";
import {
  Auth,
  AuthError,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const handleAuthError = (
  error: unknown,
  errors: EnumType,
  errorsMessages: EnumType,
): AuthUserReturns => {
  if (error instanceof Error) {
    const { code } = error as AuthError;

    return {
      result: "error",
      error: String(
        getErrorMessage({ errors, errorsMessages, errorCode: code }),
      ),
    };
  }
  return { result: "error", error: "Unknown error" };
};

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
  } catch (error) {
    return handleAuthError(error, REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES);
  }
};

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

export const logOutUser = async ({
  auth,
}: {
  auth: Auth;
}): Promise<AuthUserReturns> => {
  try {
    await signOut(auth);

    return { result: "success" };
  } catch (error) {
    return handleAuthError(error, SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES);
  }
};

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
