import { fetchUser, User } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';
import { updateUser } from 'store/user/services/updateUser';

class UserStore {
  user: User | null = null;
  loadingUser = false;
  loadingError = '';

  constructor() {
    makeAutoObservable(this);
  }

  private handleError(error: Error) {
    console.error('Error user', error.message);

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
      const user = await fetchUser({ userID });

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

  async updateUser(user: Partial<User>) {
    this.loadingUser = true;
    try {
      await updateUser({ userID: this.user?.userID, ...user });

      runInAction(() => {
        if (this.user) this.user = { ...this.user, ...user };
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
