import { USERS_COLLECTION_NAME } from '@constants';
import { setData } from '@shared/services/firebase';

import { CreateAccountProps } from './types';

export const createUserAccount = async ({ userID, ...userData }: CreateAccountProps) => {
  if (!userID) return;

  try {
    await setData(USERS_COLLECTION_NAME, userID, { userID, ...userData });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error creating user account:', errorMessage);
    throw new Error(errorMessage);
  }
};
