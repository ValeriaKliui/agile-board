import { auth } from '@config';
import { userStore } from '@store';
import { useEffect } from 'react';

export const useAuthState = () => {
  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged(async (user) => {
      if (user) {
        await userStore.fetchUser(user.uid);
      }
    });

    return () => unsubscribe?.();
  }, []);
};
