import { db } from '@config/firebase';
import { User } from '@store/user/interfaces';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { makeAutoObservable, reaction, runInAction } from 'mobx';

class UserStore {
  user: User | null = null;
  loadingUser = false;
  updatingUser = false;
  updatingUserErrors = null;
  userID = window.localStorage.getItem('uid') ?? '';

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.userID,
      (userID) => {
        if (userID) {
          window.localStorage.setItem('uid', userID);
        } else {
          window.localStorage.removeItem('uid');
        }
      }
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
      const docRef = doc(db, 'Users', this.userID);
      const docSnap = await getDoc(docRef);

      runInAction(() => {
        if (docSnap.exists()) this.user = docSnap.data() as User;
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => (this.loadingUser = false));
    }
  }

  async updateUser({ uid = this.userID, userData }) {
    try {
      const newData = Object.fromEntries(
        Object.entries(userData).filter(
          ([_, value]) => value !== undefined
        )
      );
      await setDoc(doc(db, 'Users', uid), newData);

      runInAction(() => (this.user = { ...this.user, ...newData }));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  forgetUser() {
    this.user = null;
    this.userID = '';
  }
}

export default new UserStore();
