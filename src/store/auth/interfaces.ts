import { Auth } from "firebase/auth";

export interface AuthErrors {
  login: string | null;
  register: string | null;
  logout: string | null;
  forgot: string | null;
}

export interface AuthParams {
  auth: Auth;
}

export interface RegisterParams extends AuthParams {
  email: string;
  password: string;
}

export interface LoginParams extends AuthParams {
  email: string;
  password: string;
}

export interface ForgotPasswordParams extends AuthParams {
  email: string;
}
