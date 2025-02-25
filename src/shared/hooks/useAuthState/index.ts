import { auth } from '@config';
import { userStore } from '@store/user';
import { useEffect } from 'react';

export const useAuthState = () => {
  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged(async (user) => {
      if (user) {
        await userStore.fetchUser(user.uid)
      }
    });

    return () => unsubscribe?.();
  }, []);
};
