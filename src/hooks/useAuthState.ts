import { auth } from "@config/firebase";
import userStore from "@store/userStore";
import { useEffect } from "react";

export const useAuthState = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      userStore.setUserID(user && userStore.isLoggedIn ? user.uid : null);
    });

    return () => unsubscribe();
  }, []);
};
