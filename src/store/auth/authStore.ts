import { loginUser } from "@utils/firebase/auth/loginUser";
import { registerUser } from "@utils/firebase/auth/registerUser";
import { resetPassword } from "@utils/firebase/auth/resetPassword";
import { logOutUser } from "@utils/firebase/auth/logOutUser";
import { makeAutoObservable } from "mobx";

import userStore from "../user/userStore";
import {
  AuthErrors,
  ForgotPasswordParams,
  LoginParams,
  RegisterParams,
} from "./interfaces";

class AuthStore {
  inProgress = false;
  errors: AuthErrors = {
    login: null,
    register: null,
    logout: null,
    forgot: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  private async performAuthAction<T>(
    action: keyof AuthErrors,
    authFn: () => Promise<T>,
    successCallback?: (result: T) => void,
  ) {
    this.inProgress = true;
    this.errors[action] = null;

    try {
      const result = await authFn();
      successCallback?.(result);
    } catch (error) {
      if (error instanceof Error) {
        this.errors[action] = error.message;
      }
    } finally {
      this.inProgress = false;
    }
  }

  async register(userData: RegisterParams) {
    await this.performAuthAction(
      "register",
      () => registerUser(userData),
      async ({ uid }) => {
        await userStore.updateUser({ userID: uid, ...userData });
      },
    );
  }

  async login({ email, password }: LoginParams) {
    await this.performAuthAction(
      "login",
      () => loginUser({ email, password }),
      async ({ uid }) => {
        userStore.setUserID(uid);
        await userStore.fetchUser();
      },
    );
  }

  async logout() {
    await this.performAuthAction("logout", logOutUser, () => {
      userStore.forgetUser();
    });
  }

  async forgotPassword({ email }: ForgotPasswordParams) {
    await this.performAuthAction("forgot", () => resetPassword({ email }));
  }

  resetError() {
    this.errors = {
      login: null,
      register: null,
      logout: null,
      forgot: null,
    };
  }
}

export default new AuthStore();
