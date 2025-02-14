import { db } from "@config/firebase";
import user from "@store/user";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

export const useFetchUserData = () => {
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        user.setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    if (user.isLoggedIn) {
      fetchData();
    }
  }, []);
};
