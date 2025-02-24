import { USERS_DB_NAME } from '@constants';
import { getData, setData } from '@shared/services/firebase';
import { filterUndefinedValues } from '@shared/utils';
import { User } from '@store/user';
import { makeAutoObservable, reaction, runInAction } from 'mobx';

class UserStore {
  user: User | null = null;
  loadingUser = false;
  loadingError = '';
  userID = '';

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.userID,
      (userID) => {
        this.fetchUser(userID);
      },
    );
  }

  private handleError(error: Error) {
    runInAction(() => {
      this.loadingError = error.message;
    });
  }

  get isLoggedIn() {
    return !!this.user;
  }

  setUserID(userID: string) {
    this.userID = userID;
  }

  async fetchUser(userID: string) {
    this.loadingUser = true;
    try {
      const user = await getData<User>(USERS_DB_NAME, userID);
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

      await setData(USERS_DB_NAME, this.userID, { ...this.user, ...newData });

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
    this.userID = '';
  }
}

export const userStore = new UserStore();
