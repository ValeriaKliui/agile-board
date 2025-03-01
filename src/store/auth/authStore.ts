import {
  loginUser,
  logOutUser,
  registerUser,
  resetPassword,
  updatePassword,
} from '@shared/services';
import { userStore } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

import {
  AuthErrors,
  ForgotPasswordParams,
  LoginParams,
  RegisterParams,
  UpdatePasswordProps,
} from './types';

class AuthStore {
  inProgress = false;
  errors: AuthErrors = {
    login: null,
    register: null,
    logout: null,
    forgot: null,
    updatePassword: null,
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
      runInAction(() => (this.inProgress = false));
    }
  }

  async register(userData: RegisterParams) {
    await this.performAuthAction('register', () => registerUser(userData));
  }

  async login({ email, password }: LoginParams) {
    await this.performAuthAction(
      'login',
      () => loginUser({ email, password }),
      async ({ uid }) => {
        await userStore.fetchUser(uid);
      },
    );
  }

  async logout() {
    await this.performAuthAction('logout', logOutUser, () => {
      logOutUser();
      userStore.forgetUser();
    });
  }

  async forgotPassword({ email }: ForgotPasswordParams) {
    await this.performAuthAction('forgot', () => resetPassword({ email }));
  }

  async updatePassword({ oldPassword, newPassword }: UpdatePasswordProps) {
    await this.performAuthAction('updatePassword', () =>
      updatePassword({ oldPassword, newPassword }),
    );
  }

  resetError() {
    this.errors = {
      login: null,
      register: null,
      logout: null,
      forgot: null,
      updatePassword: null,
    };
  }
}

export const authStore = new AuthStore();
