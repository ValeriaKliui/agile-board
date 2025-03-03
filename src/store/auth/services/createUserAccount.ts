import { USERS_COLLECTION_NAME } from '@constants';
import { setData } from '@shared/services';

import { CreateAccountProps } from './types';

export const createUserAccount = async ({ userID, ...userData }: CreateAccountProps) => {
  if (!userID) return;

  try {
    await setData({
      collectionPaths: [USERS_COLLECTION_NAME],
      docID: userID,
      data: { userID, ...userData },
    });
  } catch (error) {
    console.error('Error creating account', error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
