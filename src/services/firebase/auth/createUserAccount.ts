import { USERS_DB_NAME } from '@constants/common';
import { setData } from '@services/firebase/db/setData';
import { User } from '@store/user/interfaces';

export const createUserAccount = async ({ userID, ...userData }: User) => {
  try {
    if (userID) await setData(USERS_DB_NAME, userID, userData);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
