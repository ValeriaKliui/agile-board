import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const { VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_PROJECT_ID } = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const getSafeAuth = () => {
  try {
    return getAuth(app);
  } catch (error) {
    console.error('Firebase Auth Initialization Error:', error);
    throw new Error('Failed to initialize Firebase Auth');
  }
};

export const auth = getSafeAuth();
export const db = getFirestore(app);

export default app;
