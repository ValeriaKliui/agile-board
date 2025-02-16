import { USERS_DB_NAME } from "@constants/index";
import { User } from "@store/user/interfaces";
import { setData } from "@utils/firebase/db/setData";

export const createUserAccount = async ({ userID, ...userData }: User) => {
  try {
    if (userID) await setData(USERS_DB_NAME, userID, userData);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
