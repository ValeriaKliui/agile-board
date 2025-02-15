import { loginUser } from "@utils/firebase/auth/loginUser";
import { registerUser } from "@utils/firebase/auth/registerUser";
import { resetPassword } from "@utils/firebase/auth/resetPassword";
import { makeAutoObservable, runInAction } from "mobx";

import userStore from "../user/userStore";
import {
  AuthErrors,
  ForgotPasswordParams,
  LoginParams,
  RegisterParams,
} from "./interfaces";
import { logOutUser } from "@utils/firebase/auth/logOutUser";

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

  async register({ email, password, username }: RegisterParams) {
    this.inProgress = true;
    this.errors.register = null;

    try {
      const { uid } = await registerUser({ email, password });
      await userStore.updateUser({ uid, username, email });
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error) this.errors.register = error.message;
      });
    } finally {
      runInAction(() => (this.inProgress = false));
    }
  }

  async login({ email, password }: LoginParams) {
    this.inProgress = true;
    this.errors.login = null;

    try {
      const { uid } = await loginUser({ email, password });
      userStore.setUserID(uid);
      await userStore.fetchUser();
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error) this.errors.login = error.message;
      });
    } finally {
      runInAction(() => (this.inProgress = false));
    }
  }

  async logout() {
    this.inProgress = true;
    this.errors.logout = null;

    try {
      await logOutUser();
      userStore.forgetUser();
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error) this.errors.logout = error.message;
      });
    } finally {
      runInAction(() => (this.inProgress = false));
    }
  }

  async forgotPassword({ email }: ForgotPasswordParams) {
    this.inProgress = true;
    this.errors.logout = null;

    try {
      await resetPassword({ email });
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error) this.errors.logout = error.message;
      });
    } finally {
      runInAction(() => (this.inProgress = false));
    }
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
