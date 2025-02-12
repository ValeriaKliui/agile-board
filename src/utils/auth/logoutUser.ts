import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export const logoutUser = async () => {
  await signOut(auth);
};
