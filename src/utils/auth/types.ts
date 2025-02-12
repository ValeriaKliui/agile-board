import { User } from "firebase/auth";

export interface AuthUserProps {
  email: string;
  password: string;
}

export interface AuthUserReturns {
  result: "success" | "error";
  error?: string;
  user?: User;
}

export interface AuthError {
  code: string;
}
export enum REGISTER_ERRORS {
  ALREADY_REGISTERED = "auth/email-already-in-use",
}

export enum REGISTER_ERRORS_MESSAGES {
  ALREADY_REGISTERED = "User with this email is already registered",
}

export enum LOGIN_ERRORS {
  INVALID_CREDENTIAL = "auth/invalid-credential",
}
export enum LOGIN_ERRORS_MESSAGES {
  INVALID_CREDENTIAL = "Email or password is wrong",
}
