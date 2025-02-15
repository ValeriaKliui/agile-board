import { DefaultTabInfo } from "@layout/auth/interfaces";

export enum PATHS {
  HOME = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  FORGOT_PASSWORD = "/forgot-password",
  PROFILE = "/profile",
}

export const AUTH_TABS: DefaultTabInfo[] = [
  {
    key: "1",
    label: "Log in",
    link: PATHS.LOGIN,
  },
  {
    key: "2",
    label: "Register",
    link: PATHS.REGISTER,
  },
];

export const USER_PROPERTIES = ["username", "email", "city", "occupation"];
