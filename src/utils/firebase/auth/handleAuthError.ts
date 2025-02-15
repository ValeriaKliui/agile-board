import { getErrorMessage } from "@utils/index";
import { EnumType } from "@utils/types";
import { AuthError } from "firebase/auth";

export const handleAuthError = (
  error: unknown,
  errors: EnumType,
  errorsMessages: EnumType,
) => {
  if (error instanceof Error) {
    const { code } = error as AuthError;

    return String(getErrorMessage({ errors, errorsMessages, errorCode: code }));
  }
};
