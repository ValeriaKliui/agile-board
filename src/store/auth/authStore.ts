import { loginUser } from '@utils/auth/loginUser';
import { registerUser } from '@utils/auth/registerUser';
import { resetPassword } from '@utils/auth/resetPassword';
import { signOut } from 'firebase/auth';
import { makeAutoObservable, runInAction } from 'mobx';

import userStore from '../user/userStore';
import {
  AuthErrors,
  AuthParams,
  ForgotPasswordParams,
  LoginParams,
  RegisterParams,
} from './interfaces';

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

  async register({
    auth,
    email,
    password,
    username,
  }: RegisterParams) {
    this.inProgress = true;
    this.errors.register = null;

    try {
      const { uid } = await registerUser({ auth, email, password });
      await userStore.updateUser({ uid, username, email });
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error)
          this.errors.register = error.message;
      });
    } finally {
      runInAction(() => (this.inProgress = false));
    }
  }

  async login({ auth, email, password }: LoginParams) {
    this.inProgress = true;
    this.errors.login = null;

    try {
      const { uid } = await loginUser({ auth, email, password });
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

  async logout({ auth }: AuthParams) {
    this.inProgress = true;
    this.errors.logout = null;

    try {
      await signOut(auth);
      userStore.forgetUser();
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error)
          this.errors.logout = error.message;
      });
    } finally {
      runInAction(() => (this.inProgress = false));
    }
  }

  async forgotPassword({ auth, email }: ForgotPasswordParams) {
    this.inProgress = true;
    this.errors.logout = null;

    try {
      await resetPassword({ auth, email });
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error)
          this.errors.logout = error.message;
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
