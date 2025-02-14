import { makeAutoObservable, reaction } from "mobx";

class UserStore {
  currentUser = null;
  loadingUser = false;
  updatingUser = false;
  updatingUserErrors = null;
  userID = window.localStorage.getItem("uid");

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

  setUserID(uid) {
    this.userID = uid;
  }

  pullUser = async () => {
    // this.loadingUser = true;
    // try {
    //   const { user } = await agent.Auth.current();
    //   this.currentUser = user;
    // } catch (error) {
    //   console.error("Failed to load user:", error);
    // } finally {
    //   this.loadingUser = false;
    // }
  };

  updateUser = async (newUser) => {
    this.updatingUser = true;
    try {
      const { user } = await agent.Auth.save(newUser);
      this.currentUser = user;
    } catch (error) {
      this.updatingUserErrors = error;
      console.error("Failed to update user:", error);
    } finally {
      this.updatingUser = false;
    }
  };

  forgetUser() {
    this.currentUser = null;
    this.userID = null;
  }
}

export default new UserStore();
