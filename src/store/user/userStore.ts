import { db } from "@config/firebase";
import { User } from "@store/user/interfaces";
import { getData } from "@utils/firebase/db/getData";
import { doc, setDoc } from "firebase/firestore";
import { makeAutoObservable, reaction, runInAction } from "mobx";

class UserStore {
  user: User | null = null;
  loadingUser = false;
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

  get isLoggedIn() {
    return !!this.userID;
  }

  setUserID(uid: string) {
    this.userID = uid;
  }

  async fetchUser() {
    this.loadingUser = true;
    try {
      const user = await getData<User>("Users", this.userID);

      runInAction(() => {
        if (user) this.user = user;
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => (this.loadingUser = false));
    }
  }

  async updateUser({ userID = this.userID, ...userData }) {
    try {
      const newData = Object.fromEntries(
        Object.entries(userData).filter(([_, value]) => value !== undefined),
      );
      console.log(userData);
      await setDoc(doc(db, "Users", userID), newData);

      runInAction(() => (this.user = { ...this.user, ...newData }));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  forgetUser() {
    this.user = null;
    this.userID = "";
  }
}

export default new UserStore();
