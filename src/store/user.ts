import { makeAutoObservable } from "mobx";

class User {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser() {
    this.user = user;
  }
}

export default new User();
