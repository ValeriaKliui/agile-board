import { Auth, User } from "firebase/auth";

export interface AuthUserProps {
  auth: Auth;
  email: string;
  password: string;
}

export interface RegisterUserProps extends AuthUserProps {
  username: string;
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

export enum SIGN_OUT_ERRORS {
  NETWORK_FAILED = "auth/network-request-failed",
}

export enum SIGN_OUT_ERRORS_MESSAGES {
  NETWORK_FAILED = "Network issues",
}

export enum RESET_PASSWORD_ERRORS {
  USER_NOT_FOUND = "auth/user-not-found",
}
export enum RESET_PASSWORD_ERRORS_MESSAGES {
  USER_NOT_FOUND = "User with such email doesn't exist",
}
