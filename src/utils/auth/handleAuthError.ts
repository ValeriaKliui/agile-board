import { AuthUserReturns } from "@utils/auth/interfaces";
import { getErrorMessage } from "@utils/index";
import { EnumType } from "@utils/types";
import { AuthError } from "firebase/auth";

export const handleAuthError = (
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
