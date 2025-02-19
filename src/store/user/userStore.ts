import { USERS_DB_NAME } from '@constants/common';
import { User } from '@store/user/types';
import { getData } from '@services/firebase/db/getData';
import { filterUndefinedValues } from '@utils/common';
import { makeAutoObservable, runInAction } from 'mobx';
import { setData } from '@services/firebase/db/setData';

class UserStore {
  user: User | null = null;
  loadingUser = false;
  loadingError = '';
  userID = '';

  constructor() {
    makeAutoObservable(this);
  }

  private handleError(error: Error) {
    runInAction(() => {
      this.loadingError = error.message;
    });
  }

  get isLoggedIn() {
    return !!this.user;
  }

  setUserID(uid: string) {
    this.userID = uid;
  }

  async fetchUser() {
    this.loadingUser = true;
    try {
      const user = await getData<User>(USERS_DB_NAME, this.userID);

      runInAction(() => {
        if (user) {
          this.user = user;
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        this.handleError(error);
      }
    } finally {
      this.loadingUser = false;
    }
  }

  async updateUser({ userID = this.userID, ...userData }) {
    try {
      this.loadingUser = true;
      const newData = filterUndefinedValues(userData);

      await setData(USERS_DB_NAME, userID, newData);

      runInAction(() => {
        if (this.user) this.user = { ...this.user, ...newData };
      });
    } catch (error) {
      if (error instanceof Error) {
        this.handleError(error);
      }
    } finally {
      this.loadingUser = false;
    }
  }

  forgetUser() {
    this.user = null;
    this.userID = '';
  }
}

export const userStore = new UserStore();
