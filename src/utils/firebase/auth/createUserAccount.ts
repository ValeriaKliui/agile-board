import { User } from "@store/user/interfaces";
import { setData } from "@utils/firebase/db/setData";

const { VITE_USERS_DB_NAME } = import.meta.env;

export const createUserAccount = async ({ userID, ...userData }: User) => {
  try {
    if (userID) await setData(VITE_USERS_DB_NAME, userID, userData);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
