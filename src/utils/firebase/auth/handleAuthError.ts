import { getErrorMessage } from "@utils/index";
import { EnumType } from "@utils/types";
import { AuthError } from "firebase/auth";

export const handleAuthError = (
  error: unknown,
  errors: EnumType,
  errorsMessages: EnumType,
): string | undefined => {
  if (!(error instanceof Error)) return undefined;

  const authError = error as AuthError;

  return (
    getErrorMessage({ errors, errorsMessages, errorCode: authError.code }) ||
    "An unknown error occurred."
  );
};
