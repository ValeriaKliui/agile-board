import { auth } from '@config';
import { userStore } from '@store';
import { useEffect } from 'react';

export const useAuthState = () => {
  useEffect(() => {
    const unsubscribe = async () => {
      await auth.authStateReady();
      const user = auth.currentUser;

      if (user) await userStore.fetchUser(user.uid);
      else userStore.setLoadingUser(false);
    };

    unsubscribe();
  }, []);
};
