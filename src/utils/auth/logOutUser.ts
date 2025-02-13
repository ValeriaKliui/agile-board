import user from "@store/user";
import { handleAuthError } from "@utils/auth/handleAuthError";
import {
  AuthUserReturns,
  SIGN_OUT_ERRORS,
  SIGN_OUT_ERRORS_MESSAGES,
} from "@utils/auth/interfaces";
import { Auth, signOut } from "firebase/auth";

export const logOutUser = async ({
  auth,
}: {
  auth: Auth;
}): Promise<AuthUserReturns> => {
  try {
    await signOut(auth);

    user.setUID("");

    return { result: "success" };
  } catch (error) {
    return handleAuthError(error, SIGN_OUT_ERRORS, SIGN_OUT_ERRORS_MESSAGES);
  }
};
