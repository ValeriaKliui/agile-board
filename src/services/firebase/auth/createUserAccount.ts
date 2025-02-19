import { USERS_DB_NAME } from '@constants/common';
import { setData } from '@services/firebase/db/setData';
import { CreateAccountProps } from './types';

export const createUserAccount = async ({ userID, ...userData }: CreateAccountProps) => {
  try {
    if (userID) await setData(USERS_DB_NAME, userID, userData);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
