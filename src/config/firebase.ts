import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const { VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_PROJECT_ID } = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
