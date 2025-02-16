import { USERS_DB_NAME } from "@constants/index";
import { User } from "@store/user/interfaces";
import { getData } from "@utils/firebase/db/getData";
import { setData } from "@utils/firebase/db/setData";
import { filterUndefinedValues } from "@utils/index";
import { makeAutoObservable, reaction, runInAction } from "mobx";

class UserStore {
  user: User | null = null;
  loadingUser = false;
  loadingError = "";
  updatingUser = false;
  updatingUserErrors = null;
  userID = window.localStorage.getItem("uid") ?? "";

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.userID,
      (userID) => {
        if (userID) {
          window.localStorage.setItem("uid", userID);
        } else {
          window.localStorage.removeItem("uid");
        }
      },
    );
  }

  private handleError(error: Error) {
    console.error(error);
    runInAction(() => {
      this.loadingError = error.message;
    });
  }

  get isLoggedIn() {
    return !!this.userID;
  }

  setUserID(uid: string) {
    this.userID = uid;
  }

  async fetchUser() {
    this.loadingUser = true;
    try {
      const user = await getData<User>(USERS_DB_NAME, this.userID);
      runInAction(() => {
        if (user) this.user = user;
      });
    } catch (error) {
      console.log(error);
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

      console.log("userData", userData);
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
    this.userID = "";
  }
}

export default new UserStore();
