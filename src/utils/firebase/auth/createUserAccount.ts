import { User } from "@store/user/interfaces";
import { USERS_DB_NAME } from "@utils/firebase/db/constants";
import { setData } from "@utils/firebase/db/setData";

export const createUserAccount = async (userData: User) => {
  const { userID } = userData;

  try {
    if (userID) await setData(USERS_DB_NAME, userID, userData);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
