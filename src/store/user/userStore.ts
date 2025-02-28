import { USERS_COLLECTION_NAME } from '@constants';
import { getData, updateData } from '@shared/services/firebase';
import { filterUndefinedValues } from '@shared/utils';
import { User } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

class UserStore {
  user: User | null = null;
  loadingUser = false;
  loadingError = '';

  constructor() {
    makeAutoObservable(this);
  }

  private handleError(error: Error) {
    console.error('Error auth', error.message);

    runInAction(() => {
      this.loadingError = error.message;
    });
  }

  get isLoggedIn() {
    return !!this.user;
  }

  async fetchUser(userID: string) {
    this.loadingUser = true;
    try {
      const user = await getData<User>(USERS_COLLECTION_NAME, userID);

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
      runInAction(() => {
        this.loadingUser = false;
      });
    }
  }

  async updateUser({ ...userData }) {
    try {
      this.loadingUser = true;
      const newData = filterUndefinedValues(userData);

      const userID = this.user?.userID;
      if (userID) await updateData(USERS_COLLECTION_NAME, userID, newData);

      runInAction(() => {
        if (this.user) this.user = { ...this.user, ...newData };
      });
    } catch (error) {
      if (error instanceof Error) {
        this.handleError(error);
      }
    } finally {
      runInAction(() => {
        this.loadingUser = false;
      });
    }
  }

  forgetUser() {
    this.user = null;
  }
}

export const userStore = new UserStore();
