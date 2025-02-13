import { makeAutoObservable } from "mobx";

class User {
  user = null;
  uid = "";

  constructor() {
    makeAutoObservable(this);

    const userID = localStorage.getItem("uid");
    if (userID) {
      this.uid = userID;
    }
  }

  setUID(uid) {
    if (uid) {
      localStorage.setItem("uid", uid);
      this.uid = uid;
    } else {
      localStorage.removeItem("uid");
      this.uid = "";
    }
  }

  get isLoggedIn() {
    return !!this.uid;
  }

  setUserData(user) {
    this.user = user;
  }
}

export default new User();
