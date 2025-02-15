import { auth } from "@config/firebase";
import userStore from "@store/user/userStore";
import { useEffect } from "react";

export const useAuthState = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && userStore.isLoggedIn) {
        userStore.setUserID(user.uid);
        userStore.fetchUser();
      } else userStore.setUserID("");
    });

    return () => unsubscribe();
  }, []);
};
