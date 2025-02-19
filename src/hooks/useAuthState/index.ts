import { auth } from '@config';
import { userStore } from '@store/user';
import { useEffect } from 'react';

export const useAuthState = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        userStore.setUserID(user.uid);
        userStore.fetchUser();
      }
    });

    return () => unsubscribe();
  }, []);
};
