import { auth } from "@config/firebase";
import user from "@store/user";
import { useEffect } from "react";

export const useUnauthorizeUser = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authorizedUser) => {
      // const isLogined = user.isLoggedIn && authorizedUser;
      console.log(
        "user.isLoggedIn",
        user.isLoggedIn,
        "authorizedUser",
        authorizedUser,
      );
      // if (!isLogined) {
      //   auth.signOut();
      //   user.setUID('');
      // }
    });
    return () => unsubscribe();
  }, []);
};
